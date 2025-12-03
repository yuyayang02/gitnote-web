# 使用 Bun 官方镜像作为构建阶段的基础镜像
FROM oven/bun:canary AS builder

# 设置工作目录
WORKDIR /app

COPY package.json ./
COPY bunfig.toml ./

RUN cat <<EOF > $HOME/.bunfig.toml
[install]
registry = "https://registry.npmmirror.com"
EOF

RUN bun install

# 复制项目文件
COPY . .

# 获取外部参数
ARG API_BASE_URL
ARG PUBLIC_UMAMI_WEBSITE_ID
ARG PUBLIC_UMAMI_SCRIPT_URL

ENV API_BASE_URL=$API_BASE_URL
ENV PUBLIC_UMAMI_WEBSITE_ID=$PUBLIC_UMAMI_WEBSITE_ID
ENV PUBLIC_UMAMI_SCRIPT_URL=$PUBLIC_UMAMI_SCRIPT_URL

RUN bun run build

FROM oven/bun:canary

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./

RUN cat <<EOF > $HOME/.bunfig.toml
[install]
registry = "https://registry.npmmirror.com"
EOF

RUN bun install --production

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["bun", "build/index.js"]
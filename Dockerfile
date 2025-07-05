# 使用 Node.js 官方镜像作为基础镜像
FROM node:18-alpine AS builder

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

RUN npm config set registry https://registry.npmmirror.com
RUN npm install --global pnpm
RUN pnpm config set registry https://registry.npmmirror.com

# 安装依赖
RUN pnpm i

# 复制项目文件
COPY . .

# 获取外部参数
ARG API_BASE_URL
ARG PUBLIC_UMAMI_WEBSITE_ID
ARG PUBLIC_UMAMI_SCRIPT_URL

ENV API_BASE_URL=$API_BASE_URL
ENV PUBLIC_UMAMI_WEBSITE_ID=$PUBLIC_UMAMI_WEBSITE_ID
ENV PUBLIC_UMAMI_SCRIPT_URL=$PUBLIC_UMAMI_SCRIPT_URL

# 构建应用
RUN pnpm build

# 使用更小的基础镜像来运行应用
FROM node:18-alpine

WORKDIR /app

# 从构建阶段复制必要的文件
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./

RUN npm config set registry https://registry.npmmirror.com
RUN npm install --global pnpm
RUN pnpm config set registry https://registry.npmmirror.com
# 安装生产依赖
RUN pnpm i -p

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", "build"]
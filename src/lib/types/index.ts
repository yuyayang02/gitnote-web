export interface Group {
    id: string,
    name: string,
}

export interface ArticleMateData {
    slug: string,
    title: string,
    summary: string,
    author: {
        name: string
    },
    group: Group,
    tags: string[],
    updated_at: number
    created_at: number
}

export interface ArticleDetail extends ArticleMateData {
    content: string,
}

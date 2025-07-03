export interface Category {
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
    category: Category,
    tags: string[],
    updated_at: number
    created_at: number
}

export interface ArticleContentData extends ArticleMateData {
    content: string,
}

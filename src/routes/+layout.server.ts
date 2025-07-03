import { env } from '$env/dynamic/public';
import type { ArticleMateData, Category } from '$lib/types/index';


export const load = async () => {
    const categories: Category[] = await fetch(`${env.PUBLIC_BASE_URL}/api/articles/categories`).then(resp => resp.json())
    const tags: string[] = await fetch(`${env.PUBLIC_BASE_URL}/api/articles/tags`).then(resp => resp.json())


    const recentArticles: ArticleMateData[] = await fetch(`${env.PUBLIC_BASE_URL}/api/articles?limit=5`).then(resp => resp.json())

    return {
        categories, tags, recentArticles
    }
}

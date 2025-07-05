import { API_BASE_URL } from '$env/static/private';
import type { ArticleMateData, Category } from '$lib/types/index';


export const load = async () => {
    const categories: Category[] = await fetch(`${API_BASE_URL}/api/articles/categories`).then(resp => resp.json())
    const tags: string[] = await fetch(`${API_BASE_URL}/api/articles/tags`).then(resp => resp.json())


    const recentArticles: ArticleMateData[] = await fetch(`${API_BASE_URL}/api/articles?limit=5`).then(resp => resp.json())

    return {
        categories, tags, recentArticles
    }
}

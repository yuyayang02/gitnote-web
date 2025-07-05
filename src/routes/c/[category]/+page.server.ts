import { API_BASE_URL } from '$env/static/private';
import type { ArticleMateData } from "$lib/types"

export const load = async ({ params }) => {
    const articles: ArticleMateData[] = await fetch(`${API_BASE_URL}/api/articles?category=${params.category}`).then(resp => resp.json())
    return {
        articles
    }
}
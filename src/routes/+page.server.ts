import { API_BASE_URL } from '$env/static/private';
import type { ArticleMateData } from "$lib/types"

export const load = async () => {
    const articles: ArticleMateData[] = await fetch(`${API_BASE_URL}/api/articles`).then(resp => resp.json())

    return {
        articles
    }
}
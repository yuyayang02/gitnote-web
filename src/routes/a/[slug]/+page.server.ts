import { API_BASE_URL } from '$env/static/private';
import type { ArticleDetail } from '$lib/types/index.js'

export const load = async ({ params }) => {
    const article: ArticleDetail = await fetch(`${API_BASE_URL}/api/articles/${params.slug}`).then(resp => resp.json())
    return {
        article
    }
}

import { API_BASE_URL } from '$env/static/private';
import type { ArticleContentData } from '$lib/types/index.js'

export const load = async ({ params }) => {
    const article: ArticleContentData = await fetch(`${API_BASE_URL}/api/articles/${params.slug}`).then(resp => resp.json())
    return {
        article
    }
}

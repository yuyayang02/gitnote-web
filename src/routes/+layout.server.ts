import { API_BASE_URL } from '$env/static/private';
import type { ArticleMateData, Group } from '$lib/types/index';


export const load = async () => {
    const groups: Group[] = await fetch(`${API_BASE_URL}/api/groups`).then(resp => resp.json())
    const tags: string[] = await fetch(`${API_BASE_URL}/api/tags`).then(resp => resp.json())


    const recentArticles: ArticleMateData[] = await fetch(`${API_BASE_URL}/api/articles?limit=5`).then(resp => resp.json())

    return {
        groups, tags, recentArticles
    }
}

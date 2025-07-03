import { env } from "$env/dynamic/public"
import type { ArticleMateData } from "$lib/types"

export const load = async () => {
    const articles: ArticleMateData[] = await fetch(`${env.PUBLIC_BASE_URL}/api/articles`).then(resp => resp.json())

    return {
        articles
    }
}
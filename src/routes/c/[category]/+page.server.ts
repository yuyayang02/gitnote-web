import { env } from "$env/dynamic/public"
import type { ArticleMateData } from "$lib/types"

export const load = async ({ params }) => {
    const articles: ArticleMateData[] = await fetch(`${env.PUBLIC_BASE_URL}/api/articles?category=${params.category}`).then(resp => resp.json())
    return {
        articles
    }
}
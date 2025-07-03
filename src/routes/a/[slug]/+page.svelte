<script lang="ts">
    import ArticleContainer from "$lib/components/Article/ArticleContainer.svelte";
    import ArticleContent from "$lib/components/Article/ArticleContent.svelte";
    import ArticleMateInfo from "$lib/components/Article/ArticleMateInfo.svelte";
    import ArticleSummary from "$lib/components/Article/ArticleSummary.svelte";
    import { type ArticleContentData } from "$lib/types/index.js";
    const { data } = $props();
    const content = $derived(data.article);
</script>

{#snippet articleContent(data: ArticleContentData)}
    {#key data.slug}
        <ArticleContainer {data}>
            <header>
                <h1>{data.title}</h1>
                <ArticleMateInfo />
            </header>

            <ArticleSummary />
            <ArticleContent />
            <hr />
            <ArticleMateInfo variant="linked" />
        </ArticleContainer>
    {/key}
{/snippet}

<main class="flex-3/4 xl:w-[75%] xl:pr-[5%] mb-8 w-[100%]">
    {#if content}
        {@render articleContent(content)}
    {/if}
</main>

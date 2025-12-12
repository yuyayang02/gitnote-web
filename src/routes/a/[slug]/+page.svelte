<script lang="ts">
    import ArticleContainer from "$lib/components/Article/ArticleContainer.svelte";
    import ArticleContent from "$lib/components/Article/ArticleContent.svelte";
    import ArticleMateInfo from "$lib/components/Article/ArticleMateInfo.svelte";
    import ArticleSummary from "$lib/components/Article/ArticleSummary.svelte";
    import { siteConfig } from "$lib/config.js";
    import { type ArticleDetail } from "$lib/types/index.js";
    import { onMount, tick } from "svelte";
    const { data } = $props();
    const content = $derived(data.article);

    onMount(() => {
        tick().then(() => {
            const headings = document.querySelectorAll(
                ".markdown-body h1, h2, h3, h4, h5, h6",
            );

            headings.forEach((h) => {
                const id = h.id;
                if (!id) return;

                const anchor = document.createElement("a");
                anchor.className = "anchor";
                anchor.href = `#${id}`;

                const icon = document.createElement("span");
                icon.className = "octicon octicon-link";

                anchor.appendChild(icon);
                h.insertBefore(anchor, h.firstChild);
            });
        });
    });
</script>

<svelte:head>
    <title>{data.article.title}|{siteConfig.title}</title>
</svelte:head>

{#snippet articleContent(data: ArticleDetail)}
    {#key data.slug}
        <ArticleContainer {data}>
            <header>
                <h1 class="mb-[.3em]! pb-[.1em]!">{data.title}</h1>
                <ArticleMateInfo />
            </header>

            <ArticleSummary />
            <hr />
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

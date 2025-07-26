<script lang="ts">
    import { siteConfig } from "$lib/config.js";
    import ContentList from "$lib/components/ContentList.svelte";
    import { page } from "$app/state";

    const { data } = $props();
    const article = $derived(data.articles)
</script>

<svelte:head>
    <title>{siteConfig.title} - 个人博客</title>
</svelte:head>

<ContentList data={article}>
    {#snippet header()}
        <h1 class="flex flex-col">
            <span class="text-[20px] text-(--color-fg-muted)">Filter by</span>
            <span class="text-3xl mt-2 mb-4">{`#${page.params.tag}`}</span>
        </h1>
    {/snippet}
</ContentList>

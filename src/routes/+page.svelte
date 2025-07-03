<script lang="ts">
    import { siteConfig } from "$lib/config.js";
    import ContentList from "$lib/components/ContentList.svelte";
    const { data } = $props();
    const articles = $derived(data.articles)
</script>

<svelte:head>
    <title>{siteConfig.title}</title>
</svelte:head>

<ContentList data={articles} />

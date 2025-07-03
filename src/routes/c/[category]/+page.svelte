<script lang="ts">
    import { siteConfig } from "$lib/config.js";
    import ContentList from "$lib/components/ContentList.svelte";
    import { page } from "$app/state";
    import { useSidebarStore } from "$lib/stores/SidebarStore.js";

    const { data } = $props();
    const sidebarStore = useSidebarStore();

    const articles = $derived(data.articles);

    const category = $derived(
        $sidebarStore.categories.find(
            (category) => category.id === page.params.category,
        ),
    );
</script>

<svelte:head>
    <title>{siteConfig.title} - 个人博客</title>
</svelte:head>

<ContentList data={articles}>
    {#snippet header()}
        <h1 class="flex flex-col">
            <span class="text-[20px] text-(--color-fg-muted)">Filter by</span>
            <span class="text-3xl mt-2 mb-4">{category?.name}</span>
        </h1>
    {/snippet}
</ContentList>

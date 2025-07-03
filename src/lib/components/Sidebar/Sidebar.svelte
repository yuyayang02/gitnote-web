<script lang="ts">
    import Categories from "./Categories.svelte";
    import Tags from "./Tags.svelte";
    import { useSidebarStore } from "$lib/stores/SidebarStore";
    import RecentArticle from "./RecentArticle.svelte";

    const sidebarStore = useSidebarStore();
</script>

<aside class="xl:w-1/4 w-full p-0 mb-8 [&_a:hover]:underline xl:text-[17px]">
    <ul class="space-y-8">
        <li><RecentArticle data={$sidebarStore.recentArticles} /></li>
        <li><Categories categories={$sidebarStore.categories} /></li>
        <li><Tags tags={$sidebarStore.tags} /></li>
    </ul>
</aside>

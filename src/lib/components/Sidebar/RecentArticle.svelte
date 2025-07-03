<script lang="ts">
    import type { ArticleMateData } from "$lib/types";
    import { articleURL } from "$lib/utils";

    const { data }: { data: ArticleMateData[] } = $props();
</script>

{#if data && data.length > 0}
    <h3 class="select-none text-2xl mb-2.5">最近发布</h3>
    <ul class="space-y-1 text-inherit ml-6">
        {#each data as item (item.slug)}
            <li
                class="before:content-['-'] before:-ml-4 before:-mt-[1px] before:absolute"
            >
                <a href={articleURL(item.slug)}>{item.title}</a>
            </li>
        {/each}
    </ul>
{/if}

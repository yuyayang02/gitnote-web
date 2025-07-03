<script lang="ts">
    import type { Category } from "$lib/types";
    import { categoryURL } from "$lib/utils";

    const { categories }: { categories: Category[] } = $props();
</script>

{#if categories.length > 0}
    <h3 class="select-none text-2xl mb-2.5">分类</h3>
    <ul class="space-y-1 text-inherit ml-6">
        {#each categories as item (item.id)}
            <li
                class="before:content-['-'] before:-ml-4 before:-mt-[1px] before:absolute"
            >
                <a href={categoryURL(item.id)}>{item.name}</a>
            </li>
        {/each}
    </ul>
{/if}

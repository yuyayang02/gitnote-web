<script lang="ts">
    import { tagURL } from "$lib/utils";

    const { tags }: { tags: string[] } = $props();
</script>

{#if tags.length > 0}
    <h3 class="select-none text-2xl mb-2.5">标签</h3>
    <ul class="text-inherit space-x-2 pl-3">
        {#each tags as itme (itme)}
            <a
                class="before:content-['#'] before:-pl-4" href={tagURL(itme)}>{itme}</a
            >
        {/each}
    </ul>
{/if}

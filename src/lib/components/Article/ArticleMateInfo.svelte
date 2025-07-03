<script lang="ts">
    import type { ArticleMateData } from "$lib/types";
    import { categoryURL, tagURL, timestampToLocalDate } from "$lib/utils";
    import { getContext } from "svelte";

    const { variant = "normal" }: Partial<{ variant: "linked" | "normal" }> =
        $props();

    const article = getContext<ArticleMateData>("article");
</script>

<div
    class:linked={variant === "linked"}
    class="-mt-2 text-[14px] text-(--color-subtopic) flex space-x-1 *:text-center *:my-auto *:after:content-['|'] *:after:ml-1 *:last:after:hidden"
>
    <!-- 隐藏作者信息 -->
    <!-- <span>{article.author.name}</span> -->
    <span>{timestampToLocalDate(article.updated_at)}</span>
    <span
        ><a href={categoryURL(article.category.id)}>{article.category.name}</a
        ></span
    >
    <span class="flex items-center gap-2">
        {#if article.tags && article.tags.length > 0}
            {#each article.tags as t (t)}
                <span>
                    <a href={tagURL(t)}>#{t}</a>
                </span>
            {/each}
        {/if}
    </span>
</div>

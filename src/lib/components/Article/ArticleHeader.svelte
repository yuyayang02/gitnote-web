<script lang="ts">
    import type { ArticleMateData } from "$lib/types";
    import { articleURL } from "$lib/utils";
    import { getContext } from "svelte";
    import ArticleMateInfo from "./ArticleMateInfo.svelte";

    const { slug, title } = getContext<ArticleMateData>("article");
</script>

<header>
    <h2
        class="flex items-center gap-2 border-b-1 border-(--color-border-muted) mt-[.3em] pb-[.3em] text-[1.4em]"
    >
        <a href={articleURL(slug)}>{title}</a>
    </h2>
    <ArticleMateInfo />
</header>

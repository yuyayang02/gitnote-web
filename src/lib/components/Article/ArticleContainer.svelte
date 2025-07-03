<script lang="ts" generics="T extends ArticleMateData">
    import type { ArticleMateData } from "$lib/types";

    import { setContext, type Snippet } from "svelte";

    const { children, data }: { children: Snippet; data: T } = $props();
    setContext("article", data);
</script>

<article class="article markdown-body">
    {@render children()}
</article>

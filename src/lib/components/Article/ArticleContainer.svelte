<script lang="ts" generics="T extends ArticleMateData">
    import { enhanceCodeBlock } from "$lib/actions/enhanceCodeBlock.svelte";
    import type { ArticleMateData } from "$lib/types";

    import { setContext, type Snippet } from "svelte";

    const { children, data }: { children: Snippet; data: T } = $props();
    setContext("article", data);
</script>

<article class="article markdown-body mb-8!" use:enhanceCodeBlock>
    {@render children()}
</article>

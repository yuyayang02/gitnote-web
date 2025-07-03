<script lang="ts">
    import type { ArticleContentData } from "$lib/types";
    import { getContext } from "svelte";

    const { content } = getContext<ArticleContentData>("article");
</script>

<main class="linked">
    {@html content}
</main>

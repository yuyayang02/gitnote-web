<script lang="ts">
    import type { ArticleDetail } from "$lib/types";
    import { getContext } from "svelte";

    const { content } = getContext<ArticleDetail>("article");
</script>

<main class="linked">
    {@html content}
</main>

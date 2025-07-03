<script lang="ts">
    import type { ArticleMateData } from "$lib/types";
    import { getContext } from "svelte";

    const { summary } = getContext<ArticleMateData>("article");
</script>

<div class="tracking-wide my-6 linked">
    {@html summary}
</div>

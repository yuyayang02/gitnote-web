<script lang="ts">
    import type { ArticleMateData } from "$lib/types";
    import { articleURL } from "$lib/utils";
    import { getContext } from "svelte";

    const { slug } = getContext<ArticleMateData>("article");
</script>

<div class="my-6 flex flex-row">
    <a href={articleURL(slug)} class="hover:underline inactive text-(--color-theme)">
        阅读全部
    </a>
</div>

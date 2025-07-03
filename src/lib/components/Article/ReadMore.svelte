<script lang="ts">
    import type { ArticleMateData } from "$lib/types";
    import { articleURL } from "$lib/utils";
    import { getContext } from "svelte";

    const { slug } = getContext<ArticleMateData>("article");
</script>

<div class="my-4 flex flex-row-reverse">
    <a href={articleURL(slug)} class="underline p-1 inactive">
        阅读全部
    </a>
</div>

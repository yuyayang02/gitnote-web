<script lang="ts">
	import type { LayoutData } from "./$types";
	import type { Snippet } from "svelte";
	import { siteConfig } from "$lib/config";

	import Aside from "$lib/components/Sidebar/Sidebar.svelte";
	import "../app.css";
	import { useSidebarStore } from "$lib/stores/SidebarStore";
	import { page } from "$app/state";
	import {
		PUBLIC_UMAMI_WEBSITE_ID,
		PUBLIC_UMAMI_SCRIPT_URL,
	} from "$env/static/public";

	const { children, data }: { children: Snippet; data: LayoutData } =
		$props();

	useSidebarStore().set({
		categories: data.categories || [],
		tags: data.tags || [],
		recentArticles: data.recentArticles || [],
	});

	const isHome = $derived(page.url.pathname === "/");
</script>

<svelte:head>
	<!-- 编译时确定 -->
	{#if PUBLIC_UMAMI_SCRIPT_URL && PUBLIC_UMAMI_WEBSITE_ID}
		<script
			defer
			src={PUBLIC_UMAMI_SCRIPT_URL}
			data-website-id={PUBLIC_UMAMI_WEBSITE_ID}
		></script>
	{/if}
</svelte:head>

<div class="min-h-screen flex flex-col font-lxgw">
	<div
		class="flex-1 flex flex-col max-w-full"
		style="padding:0 max(16px, calc(0.5 * max(0px, calc(100% - 1100px))))"
	>
		<header class="py-8 px-4">
			<div>
				<a class="inline-block mb-2.5" href="/">
					<span class="select-none text-[30px]"
						>{siteConfig.logoText}</span
					>
				</a>
				<p class="text-[#8a8a8a] text-[16px]">{siteConfig.motto}</p>
			</div>
		</header>

		<!-- 主内容 + 侧边栏区域 -->
		<div class="flex-1 p-2 flex flex-col xl:flex-row gap-8">
			{@render children()}
			<Aside />
		</div>
	</div>

	<footer
		class="mt-8 mb-16 text-center text-[0.9em] xl:text-[1em] text-[#8a8a8a]"
	>
		<div class="p-2">
			<div class="flex justify-center flex-wrap gap-3 items-center">
				<p>{siteConfig.footer.content}</p>
				{#if isHome}
					<p>
						<a href={siteConfig.footer.beian.link}>
							{siteConfig.footer.beian.text}
						</a>
					</p>
				{/if}
			</div>
		</div>
	</footer>
</div>

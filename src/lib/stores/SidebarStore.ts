import type { ArticleMateData, Category } from '$lib/types';
import { writable, type Writable } from 'svelte/store';


type SidebarData = {
  categories: Category[];
  tags: string[],
  recentArticles: ArticleMateData[]
}

const store = writable<SidebarData>({
  categories: [],
  tags: [],
  recentArticles: []
});

export const useSidebarStore = (): Writable<SidebarData> => store
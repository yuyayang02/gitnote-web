import { mount, unmount } from 'svelte';
import type { Action } from 'svelte/action';
import CopyButton from '$lib/components/CopyButton.svelte';

// 给代码块添加一个复制按钮 
export const enhanceCodeBlock: Action<HTMLElement> = (node) => {
  const preTags = node.querySelectorAll<HTMLPreElement>('pre');
  
  const components: ReturnType<typeof mount>[] = [];

  preTags.forEach((pre) => {
    pre.style.position = 'relative';

    const codeElement = pre.querySelector('code');
    const text = codeElement ? codeElement.innerText : pre.innerText;

    const component = mount(CopyButton, {
      target: pre,
      props: { text }
    });

    components.push(component);
  });

  return {
    destroy() {
      components.forEach((component) => {
        unmount(component);
      });
    }
  };
};
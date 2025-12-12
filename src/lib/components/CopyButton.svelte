<script lang="ts">
  import { scale } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  interface Props {
    text: string;
    duration?: number;
  }

  let { text, duration = 2000 }: Props = $props();

  let copied = $state(false);
  let timer: ReturnType<typeof setTimeout>;

  async function handleCopy() {
    await navigator.clipboard.writeText(text);

    copied = true;

    clearTimeout(timer);

    timer = setTimeout(() => {
      copied = false;
    }, duration);
  }
</script>

<button
  onclick={handleCopy}
  aria-label="Copy code"
  class="
    absolute right-2 top-2 z-10
    flex h-8 w-8 items-center justify-center
    rounded-md border border-transparent bg-transparent
    cursor-pointer
    transition-colors duration-200 ease-[cubic-bezier(0.3,0,0.5,1)]
    hover:bg-[#b1bac0]/15
    {copied ? 'text-[#3fb950]/70' : 'text-[#7d8590]/70'}
  "
>
  <div class="grid h-4 w-4 place-items-center">
    {#if copied}
      <span
        in:scale={{ duration: 50, easing: cubicOut, start: 0.5 }}
        class="col-start-1 row-start-1 flex"
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          fill="currentColor"
        >
          <path
            d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
          ></path>
        </svg>
      </span>
    {:else}
      <span
        in:scale={{ duration: 50, easing: cubicOut, start: 0.5 }}
        class="col-start-1 row-start-1 flex"
      >
        <svg
          aria-hidden="true"
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          class="octicon octicon-copy js-clipboard-copy-icon"
        >
          <path
            d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"
          ></path><path
            d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"
          ></path>
        </svg>
      </span>
    {/if}
  </div>
</button>

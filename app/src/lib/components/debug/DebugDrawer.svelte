<script>
import { dev } from "$app/environment";
import { ChevronsRightIcon, CodeIcon } from "svelte-feather-icons";
import { slide } from "svelte/transition";

let open = false;
</script>

{#if dev}
	<button class="fixed grid content-center justify-center bottom-4 right-4 p-4 h-10 w-10 bg-black text-white rounded-full z-[100]" on:click={() => open = !open}>
		{#if open}
			<ChevronsRightIcon size={"20"} />
		{:else}
			<CodeIcon size={"20"} />
		{/if}
	</button>
	{#if open === true}
		<aside class="fixed h-full right-0 top-0 w-full max-w-[600px] z-105" transition:slide={{ axis: "x", duration: 200 }}>
			<div class="w-screen max-w-[600px] h-full overflow-y-auto border-l pb-[72px]">
				<slot />
			</div>
		</aside>
	{/if}
{/if}
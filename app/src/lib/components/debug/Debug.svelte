<script>
import { dev } from "$app/environment";

export let title = "Debug";
export let object = {};
export let open = false;
</script>

{#if dev}
	<details class="border-y p-[15px] -mb-px" open={open}>
		<summary>{title}</summary>
		<pre class="whitespace-pre-wrap break-words">{JSON.stringify(object, null, 4)}</pre>
	</details>
{/if}
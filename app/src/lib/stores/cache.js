import { writable } from "svelte/store";

export let caches = writable({
	games: []
});
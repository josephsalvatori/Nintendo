import { getGamesAmerica } from "$int/nintendo/index";
import { caches } from "$str/cache";
import { get } from "svelte/store";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {

	let store = get(caches);

	/** Get all games */
	let games = store.games;

	if(games.length <= 0) {

		games = await getGamesAmerica(fetch);

		store.games = games;
	}

	return {
		games: games
	};
};
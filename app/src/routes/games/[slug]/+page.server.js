import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ parent, params }) {

	const parentData = await parent();
	const { slug } = params;

	// console.log(slug, parentData);
	let game;

	/** Find game by slug */
	try {

		game = parentData.games.find(game => game.slug === slug);

	} catch(error) {

		console.log(error);
	}

	if(!game) {

		throw error(404, "Game not found");
	}

	return {
		game
	};
};
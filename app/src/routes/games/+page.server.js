/** @type {import('./$types').PageServerLoad} */
export async function load({ parent, url }) {

	const parentData = await parent();

	/** Filter? */
	// console.log(parentData);

	/** sort games */
	let sortedGames = parentData.games;

	return {
		sortedGames: sortedGames
	};
};
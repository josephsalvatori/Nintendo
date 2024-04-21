import { EU_DEFAULT_LOCALE, EU_GAME_LIST_LIMIT, EU_GET_GAMES_OPTIONS, EU_GET_GAMES_URL } from "../utils/constants";
import type { EURequestOptions, GameEU } from "../utils/interfaces";
import { EshopError } from "../utils/utils";

/**
 * Fetches all games on the European, Australian or New Zealand eShops
 *
 * @remarks
 * Games from Australia / New Zealand can be limited. They are included only as much as that Nintendo assigns them properly to the PAL region
 *
 * @param options - Request options to pass to the eShop request {@link EURequestOptions | See EURequestOptions for details}
 * @returns Promise containing all requested EU/PAL games
 */
export async function getGamesEurope(options: EURequestOptions = { limit: EU_GAME_LIST_LIMIT, locale: EU_DEFAULT_LOCALE }): Promise<GameEU[]> {

	if(!options.limit) options.limit = EU_GAME_LIST_LIMIT;
	if(!options.locale) options.locale = EU_DEFAULT_LOCALE;

	console.log(options);

	return [];
}
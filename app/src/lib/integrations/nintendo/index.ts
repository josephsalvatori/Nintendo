/**
 * Nintendo API
 * https://github.com/favna/nintendo-switch-eshop/blob/main/src/index.ts
 */
export { getGamesAmerica as default, getGamesAmerica } from "$int/nintendo/games/getGamesAmerica";
export { getGamesEurope } from "$int/nintendo/games/getGamesEurope";
export { getQueriedGamesAmerica } from "$int/nintendo/games/getQueriedGamesAmerica";
export { getActiveShops } from "$int/nintendo/shops/getActiveShops";
export { getShopsAmerica } from "$int/nintendo/shops/getShopsAmerica";
export { getShopsEurope } from "$int/nintendo/shops/getShopsEurope";
export { getPrices } from "$int/nintendo/other/getPrices";
export { getShopsByCountryCodes } from "$int/nintendo/other/getShopByCountryCode";
export { parseGameCode } from "$int/nintendo/other/parseGameCode";
export { parseNSUID } from "$int/nintendo/other/parseNSUID";

export {
	PRICE_GET_URL,
	QUERIED_US_ALGOLIA_KEY_NEW,
	QUERIED_US_ALGOLIA_KEY_OLD,
	QUERIED_US_GET_GAMES_URL_NEW,
	QUERIED_US_GET_GAMES_URL_OLD,
	Region,
	US_ALGOLIA_HEADERS,
	US_ALGOLIA_ID,
	US_ALGOLIA_KEY,
	US_GET_GAMES_URL
} from "$int/nintendo/utils/constants";

export type {
	EShop,
	GameUS,
	HighlightResult,
	Nsuid,
	PriceResponse,
	QueriedGameResult,
	QueriedGameUS,
	QueriedGamesAmericaOptions,
	TitleData
} from "$int/nintendo/utils/interfaces";

export { EshopError } from "$int/nintendo/utils/utils";
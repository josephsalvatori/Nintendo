import { EU_GAME_CODE_REGEX, Region } from "../utils/constants";
import type { GameEU, GameUS } from "../utils/interfaces";
import { EshopError } from "../utils/utils";

/**
 * Parses the game code to extract the cross-region portion.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 4-digit resulting game code
 */
export function parseGameCode(game: GameEU | GameUS, region: Region): string | null {

	let codeParse: RegExpExecArray | null = null;

	switch (region) {

		case Region.AMERICAS:

			throw new EshopError(
				'`parseGameCode` is not possible for American games as the Nintendo API does not provide enough information to deduce the game code.'
			);

		case Region.EUROPE:

			codeParse = EU_GAME_CODE_REGEX.exec((game as GameEU).product_code_txt[0]);

			break;

		// case Region.ASIA:

		// 	codeParse = JP_GAME_CODE_REGEX.exec((game as GameJP).InitialCode);

			// break;
	}

	return codeParse && codeParse.length > 1 ? codeParse[1] : null;
}
import { Region } from "../utils/constants";
import type { GameEU, GameUS } from "../utils/interfaces";

/**
 * Extracts NSUID information from the game object.
 *
 * @param game The game object returned from one of the other methods.
 * @param region Region code
 * @returns The 14-digits NSUID
 */
export function parseNSUID(game: GameEU | GameUS, region: Region): string | null {

	switch(region) {

		case Region.EUROPE:
			return (game as GameEU).nsuid_txt ? (game as GameEU).nsuid_txt[0] : null;

		case Region.AMERICAS:
		default:
			return (game as GameUS).nsuid || null;
	}
}
import type { EShop } from "../utils/interfaces";
import { getShopsAmerica } from "./getShopsAmerica";
import { getShopsEurope } from "./getShopsEurope";

/**
 * Gets all active eShops.
 *
 * @remarks
 * This method will launch several requests at nintendo web services, so don't abuse it.
 *
 * @returns A list of shop objects with country code, name and default currency.
 */
export async function getActiveShops(): Promise<EShop[]> {
	try {
		const shopsAmerica = await getShopsAmerica();
		const shopsEurope = await getShopsEurope();

		return shopsAmerica.concat(shopsEurope);
	} catch (err) {
		throw err as Error;
	}
}
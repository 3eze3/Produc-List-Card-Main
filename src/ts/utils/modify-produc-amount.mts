import { Product } from '../types/product-types.mjs'

export function modifyProductAmount(
	product: Product[],
	index: number,
	change: number
) {
	if (product[index]) {
		product[index].amountUnit += change * 1
		product[index].priceTotal = product[index].amountUnit * product[index].price
	}
}

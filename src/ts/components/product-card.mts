import { Product } from '../types/product-types.mjs'
import { getData } from '../services/get-data.mjs'
import { createProduct } from '../utils/create-template-product.mjs'
import { item } from '../types/item-type.mjs'
let products: Product[]

export async function renderCards() {
	products = await getData()
	products.forEach(({ image, name, category, price, id }, index) => {
		createProduct({ image, name, category, price, id }, index)
	})
	return products.map(({ name, price, id }) => ({
		name,
		price,
		amountUnit: 0,
		priceTotal: 0,
		id,
	}))
}

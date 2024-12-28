import { getData } from '../services/get-data.mjs'
import { Product } from '../types/product-types.mjs'
import { createTemplate } from '../utils/create-template.mjs'
export async function renderProductsCardr() {
	const data: Product[] = await getData()
	data.forEach(({ image, name, category, price }, index) => {
		createTemplate({ image, name, category, price }, index)
	})
}

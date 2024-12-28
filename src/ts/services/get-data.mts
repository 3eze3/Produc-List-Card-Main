import { Product } from '../types/product-types.mjs'

import { ENTRY_POINT_DATA } from '../constants/ENTRY_JSON.mjs'
export async function getData(): Promise<Product[]> {
	try {
		const response = await fetch(ENTRY_POINT_DATA)
		if (!response.ok) return []
		const data: Product[] = await response.json()
		return data
	} catch (error) {
		console.log(error + 'al momento de procesar la informacion...')
		return []
	}
}

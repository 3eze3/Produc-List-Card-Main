import { renderCards } from './components/product-card.mjs'
import { addCart } from './dom-interactions/cart-products.mjs'
document.addEventListener('DOMContentLoaded', async () => {
	const product = await renderCards()
	addCart(product)
})

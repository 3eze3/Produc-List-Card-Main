import { updateCountCart } from './update-count-cart.mjs'

export function removeItemCart(id: number, totalItems: number) {
	const $itemToRemove = document.getElementById(`item-${id}`)
	if ($itemToRemove) {
		$itemToRemove.remove()
		updateCountCart(totalItems)
	}
}

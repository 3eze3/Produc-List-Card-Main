const $countCart = document.getElementById('count-cart')
export function updateCountCart(totalItems: number) {
	if ($countCart) $countCart.textContent = `(${totalItems})`
}

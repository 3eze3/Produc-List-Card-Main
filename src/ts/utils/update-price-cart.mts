const $sumamryOrderCart = document.querySelector('.summary__order-price')
export function updatePriceCart(totalPrice: number) {
	if ($sumamryOrderCart)
		$sumamryOrderCart.textContent = `$${totalPrice.toFixed(2)}`
}

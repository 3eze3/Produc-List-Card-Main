import { getItemConfirm } from '../utils/create-product-confirm.mjs'
import { createProductCart } from '../utils/create-product.mjs'
import { modifyProductAmount } from '../utils/modify-produc-amount.mjs'
import { removeItemCart } from '../utils/remove-item.mjs'
import { updateCountCart } from '../utils/update-count-cart.mjs'
import { updatePriceCart } from '../utils/update-price-cart.mjs'
import { updateQuantityProduct } from '../utils/update-quantity.mjs'
import { updateAmountUnit } from '../utils/update-unit-product.mjs'

const $cartFigure = document.querySelector('.cart__figure')
const $cartProducts = document.querySelector('.cart__container')
const $listcart = document.querySelector('.cart__list')
const $modal = document.querySelector('.modal') as HTMLDialogElement
const $containerModal = document.querySelector(
	'.container__modal'
) as HTMLElement

const $ulModal = document.querySelector('.modal__list')
const $buttons = document.querySelectorAll('.card__btn-add')
const $incrementBtn = document.querySelectorAll('.card__btn-increment')
const $decrementBtn = document.querySelectorAll('.card__btn-decrement')
const $buttonsSelected = document.querySelectorAll('.card__btn--wrapper')
let totalItems = 0
let totalPrice = 0
export function addCart(product) {
	const $images = document.querySelectorAll('.card__img')
	$buttons.forEach(($button, index) => {
		$button.addEventListener('click', () => {
			totalItems++
			if (!product[index].amountUnit) product[index].amountUnit = 0
			if (!product[index].priceTotal) product[index].priceTotal = 0

			modifyProductAmount(product, index, 1)
			totalPrice += parseFloat(product[index].price)
			updatePriceCart(totalPrice)
			updateAmountUnit(index, product[index].amountUnit)
			updateCountCart(totalItems)
			createProductCart(product, index, $listcart)

			$buttonsSelected[index]?.classList.add('card__btn--wrapper-selected')
			$images[index]?.classList.add('card__img-selected')
			$cartFigure?.classList.add('cart__figure-hidden')
			$cartProducts?.classList.add('cart__container-active')
		})
	})

	$decrementBtn.forEach(($btn, index) => {
		$btn.addEventListener('click', () => {
			if (product[index].amountUnit > 0) {
				modifyProductAmount(product, index, -1)
				totalPrice -= parseFloat(product[index].price)
				updatePriceCart(totalPrice)
				updateAmountUnit(index, product[index].amountUnit)
				updateQuantityProduct(
					product[index].id,
					product[index].amountUnit,
					product[index].priceTotal
				)
				if (product[index].amountUnit == 0) {
					totalItems--
					removeItemCart(product[index].id, totalItems)
					$buttonsSelected[index]?.classList.remove(
						'card__btn--wrapper-selected'
					)
					$images[index]?.classList.remove('card__img-selected')
				}
				if (totalItems === 0) {
					$cartFigure?.classList.remove('cart__figure-hidden')
					$cartProducts?.classList.remove('cart__container-active')
				}
			}
		})
	})

	$incrementBtn.forEach(($btn, index) => {
		$btn.addEventListener('click', () => {
			modifyProductAmount(product, index, 1)
			totalPrice += parseFloat(product[index].price)
			updatePriceCart(totalPrice)
			updateAmountUnit(index, product[index].amountUnit)

			updateQuantityProduct(
				product[index].id,
				product[index].amountUnit,
				product[index].priceTotal
			)
		})
	})

	$listcart?.addEventListener('click', (event) => {
		const target = event.target as HTMLElement
		const $item = target.closest('li')

		if ($item) {
			const index = parseInt($item.getAttribute('data-index'), 10)

			$item.remove()

			totalItems--
			product[index].amountUnit = 0
			totalPrice -= parseFloat(product[index]?.priceTotal || 0)
			product[index].priceTotal =
				product[index].amountUnit * product[index].price

			updateCountCart(totalItems)
			updatePriceCart(totalPrice)
			$buttonsSelected[index]?.classList.remove('card__btn--wrapper-selected')
			$images[index]?.classList.remove('card__img-selected')
			if (totalItems === 0) {
				$cartFigure?.classList.remove('cart__figure-hidden')
				$cartProducts?.classList.remove('cart__container-active')
			}
		}
	})

	const $confirmBtn = document.querySelector('.summary__confirm-order')
	$confirmBtn?.addEventListener('click', () => openModal())
	function openModal() {
		$modal.open = true
		$containerModal.classList.add('container__modal-active')
		const $newOrderBtn = document.getElementById(
			'new-order'
		) as HTMLButtonElement
		const $total = document.querySelector('.modal__total')

		const cartItems = $listcart.querySelectorAll('li')
		cartItems.forEach((item: HTMLElement) => {
			const name = item.querySelector('.item__name')?.textContent
			const price = item.querySelector('.item__price')?.textContent
			const amountUnit = item.querySelector('.item__quantity')?.textContent
			const total = item.querySelector('.item__total')?.textContent
			const li = getItemConfirm(name, price, amountUnit, total)
			$ulModal?.insertBefore(li, $ulModal.firstChild)
		})
		$total.textContent = `$${totalPrice.toFixed(2)}`
		$newOrderBtn.addEventListener('click', () => newOrder($modal))
	}

	function newOrder(modal) {
		$buttonsSelected.forEach(($btn, index) => {
			$btn.classList.remove('card__btn--wrapper-selected')
			product[index].amountUnit = 0
			product[index].priceTotal = 0
		})
		$images.forEach(($img) => {
			$img.classList.remove('card__img-selected')
		})
		while ($listcart?.firstChild) {
			$listcart.removeChild($listcart.firstChild)
		}
		totalItems = 0
		totalPrice = 0
		updateCountCart(totalItems)
		updatePriceCart(totalPrice)
		$cartFigure?.classList.remove('cart__figure-hidden')
		$cartProducts?.classList.remove('cart__container-active')
		while ($ulModal.firstChild) {
			$ulModal.removeChild($ulModal.firstChild)
		}
		modal.open = false
		$containerModal.classList.remove('container__modal-active')
	}
}

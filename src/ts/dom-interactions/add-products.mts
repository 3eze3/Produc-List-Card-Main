export function addCart() {
	const $buttons = document.querySelectorAll('.card__btn-add')
	const $buttonsSelected = document.querySelectorAll('.card__btn--wrapper')
	const $images = document.querySelectorAll('.card__img')
	//
	const $incrementBtn = document.querySelectorAll('.card__btn-increment')
	const $decrementBtn = document.querySelectorAll('.card__btn-decrement')
	const $countCart = document.getElementById('count-cart')
	const $countPlate = document.querySelectorAll('.card__numberPlate')

	$buttons.forEach(($button, index) => {
		$button.addEventListener('click', () => {
			$buttonsSelected[index]?.classList.add('card__btn--wrapper-selected')
			$images[index]?.classList.add('card__img-selected')
		})
	})
}

import { Product } from '../types/product-types.mjs'
export function createProduct(
	{ image, name, category, price, id }: Product,
	index: number
) {
	const $figure = document.querySelectorAll('.card__figure')
	if ($figure[index]) {
		$figure[index].innerHTML = ''
		$figure[index].setAttribute('id', `figure-${id}`)

		$figure[index].innerHTML = `
		  <picture class="card__picture">
		  <source media="(max-width:600px)" srcset="${image.mobile}"/>
		  <source media="(max-width:610px)" srcset="${image.tablet}" />
		  <img
		    src="${image.desktop}"
		    alt="${name} Plate"
		    class="card__img" />
		</picture>
		<figcaption class="card__figcaption">
		  <span class="card__category">${category}</span>
		  <h2 class="card__name">${name}</h2>
		  <span class="card__price">$${price}</span>
		</figcaption>
	`
	}
}

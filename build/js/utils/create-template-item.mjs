export function getTemplateItem({ name, price, amountUnit, priceTotal, id, }) {
    const li = document.createElement('li');
    li.classList.add('card__item', 'item');
    li.setAttribute('id', `item-${id}`);
    const template = `
		<div class="item__container">
			<span class="item__name">${name}</span>
			<div class="item__information">
				<span class="item__quantity">${amountUnit}x</span>
				<span class="item__price">@ $${price}</span>
				<span class="item__total">$${priceTotal}</span>
			</div>
		</div>
		<button
			class="item__remove"
		aria-label="Remove ${name}"
			id="item-remove">
			<img
				class="item__icon"
				src="./assets/images/icons/icon-remove-item.svg"
				alt aria-hidden="true" />
		</button>
	`;
    li.innerHTML = template;
    return li;
}

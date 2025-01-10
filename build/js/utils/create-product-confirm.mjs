export function getItemConfirm(name, price, amountUnit, priceTotal) {
    const li = document.createElement('li');
    li.classList.add('card__item', 'item');
    const template = `

		<div class="modal__container">
		  <img class="modal__ilustration" src="" alt="" />
		  <div class="modal__information">
			  <span class="item__name">${name}</span>
			  <div class="modal__prices">
				  <span class="item__quantity">${amountUnit}</span>
				  <span class="item__price">${price}</span>
			  </div>
		  </div>
	</div>
  <span class="item__total">${priceTotal}</span>
	`;
    li.innerHTML = template;
    return li;
}

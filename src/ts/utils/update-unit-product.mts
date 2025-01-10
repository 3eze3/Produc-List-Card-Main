const $countPlate = document.querySelectorAll('.card__numberPlate')
export function updateAmountUnit(index: number, amountUnit: number) {
	if ($countPlate[index]) $countPlate[index].textContent = `${amountUnit}`
}

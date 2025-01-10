const $countPlate = document.querySelectorAll('.card__numberPlate');
export function updateAmountUnit(index, amountUnit) {
    if ($countPlate[index])
        $countPlate[index].textContent = `${amountUnit}`;
}

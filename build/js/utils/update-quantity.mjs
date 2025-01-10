export function updateQuantityProduct(id, unit, totalPrice) {
    const $itemAdd = document.getElementById(`item-${id}`);
    if ($itemAdd) {
        const $amountElement = $itemAdd.querySelector('.item__quantity');
        const $totalItem = $itemAdd.querySelector('.item__total');
        if ($amountElement && $totalItem) {
            $amountElement.textContent = `${unit}x`;
            $totalItem.textContent = `$${parseFloat(totalPrice).toFixed(2)}`;
        }
    }
}

import { updateCountCart } from './update-count-cart.mjs';
export function removeItemCart(id, totalItems) {
    const $itemToRemove = document.getElementById(`item-${id}`);
    if ($itemToRemove) {
        $itemToRemove.remove();
        updateCountCart(totalItems);
    }
}

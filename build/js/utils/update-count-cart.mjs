const $countCart = document.getElementById('count-cart');
export function updateCountCart(totalItems) {
    if ($countCart)
        $countCart.textContent = `(${totalItems})`;
}

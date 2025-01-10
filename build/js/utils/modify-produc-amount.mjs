export function modifyProductAmount(product, index, change) {
    if (product[index]) {
        product[index].amountUnit += change * 1;
        product[index].priceTotal = product[index].amountUnit * product[index].price;
    }
}

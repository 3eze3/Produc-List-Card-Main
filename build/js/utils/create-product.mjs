import { getTemplateItem } from './create-template-item.mjs';
export function createProductCart(product, index, list) {
    const item = {
        name: product[index]?.name,
        price: product[index]?.price,
        amountUnit: product[index]?.amountUnit,
        priceTotal: parseFloat(product[index]?.priceTotal).toFixed(2),
        id: product[index]?.id,
    };
    const li = getTemplateItem(item);
    li.setAttribute('data-index', `${index}`);
    list?.insertBefore(li, list.firstChild);
}

import { getData } from '../services/get-data.mjs';
import { createProduct } from '../utils/create-template-product.mjs';
let products;
export async function renderCards() {
    products = await getData();
    products.forEach(({ image, name, category, price, id }, index) => {
        createProduct({ image, name, category, price, id }, index);
    });
    return products.map(({ name, price, id }) => ({
        name,
        price,
        amountUnit: 0,
        priceTotal: 0,
        id,
    }));
}

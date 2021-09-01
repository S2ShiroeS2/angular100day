import { ProductModel } from "../modules/ProductModel";
import { singleton } from 'tsyringe'

interface CartItem {
    product: ProductModel;
    quantity: number;
}
@singleton()
export class CartService {
    cartServiceRandomId = Math.random();
    selectedProducts: CartItem[] = [];
    calculateTotal(): number {
        return this.selectedProducts.reduce((total, item) => (item.product.price * item.quantity) + total, 0);
    };
    addToCart(): void {
        // logic here
    }
}

// export class TestCartService {
//     selectedProducts: CartItem[] = [];
//     calculateTotal(): number {
//         return this.selectedProducts.reduce((total, item) => (item.product.price * item.quantity) + total, 0);
//     };
//     addToCart(): void {
//         // logic here
//     }
// }

export class StoreService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
        this.cart = [];

        const serviceUrl = `https://raw.githubusercontent.com/pkshiu/miniapp/master/fixtures/products.json`;
        this.store = this.$http.get(serviceUrl).then(response => response.data);
    }

    getProducts() {
        return this.store;
    }

    getCart() {
        return this.cart;
    }

    // for simplicity, we'll use index as sku
    addItem(sku, photo, name, price, quantity) {
        if (quantity > 0) {
            // existing item
            let hasItem = false;
            for (let i=0; i<this.cart.length && !hasItem; i++) {
                let item = this.cart[i];
                if (item.sku == sku) {
                    hasItem = true;
                    item.quantity = item.quantity + quantity;
                }
            }

            // new item
            if (!hasItem) {
                // TODO cartItem class
                let cartItem = {
                    sku: sku,
                    photo: photo,
                    name: name,
                    price: price,
                    quantity: quantity
                };

                this.cart.push(cartItem);
            }
        }
    }

    getTotalCount() {
        let count = 0;
        for (let i=0; i<this.cart.length; i++) {
            let item = this.cart[i];
            count += item.quantity;
        }
        return count;
    }

    getTotalPrice(sku) {
        let total = 0;
        for (let i=0; i<this.cart.length; i++) {
            let item = this.cart[i];
            if (sku == null || item.sku == sku) {
                total += item.quantity * item.price;
            }
        }
        return total;
    }

    clearItems() {
        this.cart = [];
    }

    checkout() {
        // payment processing, then..
        // this.clearItems();
    }
}

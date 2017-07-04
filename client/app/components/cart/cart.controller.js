class CartController {
  constructor(StoreService) {
    'ngInject';

    this.storeSvc = StoreService;
    this.cartData = this.storeSvc.getCart();
    this.totalPrice = this.storeSvc.getTotalPrice();
  }

  checkout() {
    this.storeSvc.checkout();
  }

  getItemTotal(sku) {
    return this.storeSvc.getTotalPrice(sku);
  }
}

export default CartController;

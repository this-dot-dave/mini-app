class CheckoutController {
  constructor(StoreService) {
    'ngInject';

    this.storeSvc = StoreService;
    this.cartData = this.storeSvc.getCart();
    this.totalCount = this.storeSvc.getTotalCount();
    this.totalPrice = this.storeSvc.getTotalPrice();
  }
}

export default CheckoutController;

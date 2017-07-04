class ProductsController {
  constructor(StoreService) {
    'ngInject';
    this.storeSvc = StoreService;
    this.defaultQuantity = 1;
  }

  buyItem(sku, photo, name, price, quantity) {
    let qty = quantity ? quantity : this.defaultQuantity;
    this.storeSvc.addItem(sku, photo, name, price, qty);
  }
}

export default ProductsController;

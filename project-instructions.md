## Mini-App for Option 2

### Requirement

- Develop a mini shopping application for a ecommerce company.
- Develop three screens
  - (1) product listing screen showing a list of product for purchase, the main user interaction is to order one or more products from this page.
  - (2) a check out screen listing the product and the corresponding quantities the user selected for purchase, and the total price the user will be paying, with a “check out” action to make the purchase
  - (3) a thank you and confirmation screen after the check out, showing some marketing message and confirmation information.
- Use React.js to implement this application
- Use some flux framework to manage data flow
- The product information is given in a json file that you should load via a HTTP get at: https://raw.githubusercontent.com/pkshiu/miniapp/master/fixtures/products.json
- Include build scripts (webpack preferred)
- You can load the actual product images supplied in this repo as well.

### Model
```
{
  "product_list": [
    {
      "item_name": "Palomino pencil",
      "item_description": "Wonderful wooden pencil that draws a soft dark line",
      "unit_price": 1.25,
      "qty_available": 100,
      "photo": "pencil.jpg"
    },
    {
      "item_name": "Parker Rollerball",
      "item_description": "Classic rollerball in the jotter style",
      "unit_price": 25.0,
      "qty_available": 50,
      "photo": "rollerball.jpg"
    },
    {
      "item_name": "Rhodia A5 Notepad",
      "item_dscription": "160 pages of heavy weight, cream color paper",
      "unit_price": 19.0,
      "qty_available": 500,
      "photo": "notepad.jpg"
    },
    {
      "item_name": "Tombow Eraser",
      "item_description": "Tombow polymer eraser is particularly good for detail work",
      "unit_price": 2.2,
      "qty_available": 100,
      "photo": "eraser.jpg"
    },
    {
      "item_name": "Diamine Jet Blue Ink",
      "item_description": "130 ml bottle of Diamine ink",
      "unit_price": 13.99,
      "qty_available": 100,
      "photo": "ink.jpg"
    }
  ]
}
```
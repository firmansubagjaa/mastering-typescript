var ProductList;
(function (ProductList) {
  ProductList["JUS"] = "JUS";
  ProductList["KOPI"] = "KOPI";
  ProductList["TEH"] = "TEH";
})(ProductList || (ProductList = {}));
var product1 = {
  name: "Teh",
  price: 2000,
  category: ProductList.TEH,
};
console.log(product1);

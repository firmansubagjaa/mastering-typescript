enum ProductList {
  JUS = "JUS",
  KOPI = "KOPI",
  TEH = "TEH",
}

type Product = {
  name: string;
  price: number;
  category: ProductList;
};

const product1: Product = {
  name: "Teh",
  price: 2000,
  category: ProductList.TEH,
};

console.log(product1);

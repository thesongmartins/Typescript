import products from "./products.ts";

const productName: string = products[0].name;
console.log(productName);

const product = products.filter((product) => product.name === productName)[0];
console.log(product);

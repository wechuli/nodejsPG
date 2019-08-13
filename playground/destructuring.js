const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salesPrice: undefined
  //rating: 850
};

//renaming the variable when destructurin

const { label: productLabel, stock, rating = 5 } = product; //we can assign a default value to the variable in case the name is not found on the object

console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, price, stock }) => {
  //We can use object destructuring to destructure object properties
  console.log(type, label, stock, price);
};

transaction("order", product);

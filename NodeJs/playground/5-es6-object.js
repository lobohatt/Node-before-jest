//Object property shorthand

/*const name = 'LOBO';
const userAge = 22;

const user = {
  name: name,
  age: userAge,
  location: 'India'     //inline string
}

console.log(user);*/

const name = 'LOBO';
const userAge = 22;

const user = {
  name,                  //shorthand property as name declared  above as in object
  age: userAge,
  location: 'India'     //inline string
}

console.log(user);

// object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
}

//const label = product.label;                     METHOD 1
//const stock = product.stock;

//same by destructuring syntax

//const { label, stock } = product;                METHOD 2
//console.log(label);
//console.log(stock);


//const { label, stock,rating } = product; // if u declare rating whose property is not 
//console.log(label);                       // defined will give result undefined
//console.log(stock);                     
//console.log(rating);      

//const { label: productLabel, stock } = product; //if u want to change label variable name to other
//console.log(label);              //METHOD 3
//console.log(productLabel);    //now label variable name is productLabel, it will gonna work
//console.log(stock);


//const { label, stock, rating } = product; // if u declare rating whose property is not 
//console.log(label);                       // defined will give result undefined
//console.log(stock);                     
//console.log(rating);

//const { label, stock, rating = 5 } = product; // now rating is defined in destructuring syntax
//console.log(label);
//console.log(stock);
//console.log(rating);               //it will work


//const transaction = (type, myProduct) => {

//const { label, stock } = myProduct;          EITHER WE CAN DO THIS OR IN ADVANCED BELOW
//};

//transaction('order', product);

const transaction = (type, { label, stock }) => {  //Destructuring in Arguments itself
  console.log(type, label, stock);
};

transaction('order', product);
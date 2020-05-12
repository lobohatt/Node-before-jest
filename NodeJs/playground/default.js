const greeter = (name) => {
  console.log('Hello ' + name);
};

greeter('Lobo');



const wow = (name = 'user', age) => {      // default parameter
  console.log('Hello ' + name);
};

wow('lobo', 22);

wow();               // default parameter

//Destructuring of  empty object

const products = (type, { label, stock } = {}) => {       //destructuring
  console.log(label);
  console.log(stock);
};

products('order');


const transaction = (type, { label, stock = 0 } = {}) => {       //destructuring
  console.log(label);
  console.log(stock);
};

transaction('order', product);    // product is an object as done earlier
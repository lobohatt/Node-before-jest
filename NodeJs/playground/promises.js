const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {

    // resolve([7, 4, 2]);
    reject('Things went wrong');


  }, 2000);
});
// . then gets access to resolve and give result
/*doWorkPromise.then((result) => {
  console.log('Success!', result);
});*/

doWorkPromise.then((result) => {
  console.log('Success!', result);
}).catch((error) => {
  console.log('Error!', error);
});

//promise executes only one at a a time// according to  which arrguments executes first 
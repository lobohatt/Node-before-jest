const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error', undefined);
    callback(undefined, [1, 2, 3, 4]);
  }, 2000);
};


doWorkCallback((error, result) => {

  if (error) {
    return console.log(error);
  }
  console.log(result);
});

// callback exexcutes both // it will be categorized in to category // if error it pring error if data it print data
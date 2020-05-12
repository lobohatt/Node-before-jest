/*const square = function (e) {
  return e * e;
}
console.log(square(3));*/

/*const square = (e) => {
  return e * e;
}
console.log(square(3));*/

/*const john = () =>
  'hello';

console.log(john());*/

const event = {

  name: 'Birthday party',
  guestList: ['sam', 'john', 'bond'],
  printGuestList() {

    console.log('Guest list for ' + this.name);

    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name);
    });
  }
}
console.log(event.printGuestList());


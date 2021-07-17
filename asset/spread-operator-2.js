function myFunction (name, iceCreamFlavor) {
  console.log(`${name} really likes ${iceCreamFlavor} ice cream.`);
}

var args = ['Gabe', 'Vanilla'];
myFunction(...args);
// => Gabe really likes Vanilla ice cream.
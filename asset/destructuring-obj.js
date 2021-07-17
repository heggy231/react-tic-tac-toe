let toybox = { item1: "car", item2: "ball", item3: "frisbee" };
let { item1, item2 } = toybox;
// this is same as
// let item1 = toybox.item1;
// let item2 = toybox.item2;

console.log(item1);  // car
console.log(item2);  // ball

// we can rename key of toybox dynamicly
var { item3: disc } = toybox;
// disc => frisbee
// item3 => undefined, reference error

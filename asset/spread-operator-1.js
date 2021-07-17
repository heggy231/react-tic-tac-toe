const originalFlavors = ['Chocolate', 'Vanilla', 'Tomato'];
const newFlavors = ['Strawberry', 'Mint Chocolate Chip', 'Superman'];

// combine originalFlavors and newFlavors into inventory array
//  Array.concat method is used to combine two arrays
//  spread operator is used to pass all values of newFlavors, that of originalFlavors
const inventory = ['Rocky Road', ...originalFlavors, 'Neopolitan', ...newFlavors];

console.log(inventory);
// => ["Rocky Road", "Chocolate", "Vanilla", "Tomato", "Neopolitan", "Strawberry", "Mint Chocolate Chip", "Superman"]


// Array.concat method three arrays
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3); // => [1, 2, 3, 4, 5, 6, 7, 8, 9]

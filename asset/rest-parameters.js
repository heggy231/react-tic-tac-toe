'use strict';

// rest params
function myFunction(...params) {
  console.log(params);
}

myFunction('Andres', 1, 2, 3);
// => [ 'Andres', 1, 2, 3 ]

function myFunctionName(name, ...params) {
  console.log(name, params);
}

myFunctionName('Andres', 1, 2, 3);
// => Andres [ 1, 2, 3 ]

/**
 * Rule: rest params is the last param to be passed in
 * 
 * ...params parameter gather the REST of the 
 *   arguments, add all into the array
*/

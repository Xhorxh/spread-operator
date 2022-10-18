/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4); // pushed to both arrays and thats a problem
console.log('First array:', arr1)
console.log('Second array:', arr2);

// Copying an array
let arr3 = [4, 5, 6];
let arr4 = [...arr3];

arr4.push(7); // pushed just where we wanted to
console.log('Third array:', arr3);
console.log('Fourth array:', arr4);

// Copying an object
let obj1 = {a: 1, b: 2, c:3 };
let obj2 = {...obj1, d: 4} // copied from obj1 and added a fourth property:value pair
let obj3 = { ...obj1, b: 5} // overwriting a value to this obj, but not to the original obj1
console.log('First object:', obj1);
console.log('Second object:', obj2);
console.log('Third object:', obj3);

// Copying only part of an array/object

let arr5 = [ ...arr1, { ...obj1}, ...arr3, 'x', 'y', 'z'];
console.log(arr5);

//different dataTypes with examples//
let integer = 5;
let double = 3.14;
let string = 'Alvin';
let array = [15,20];
let object = {firstName:'Alvin ', lastName:'Kirunge'};

//display to console//
console.log('Integer = '+integer);
console.log('Double = '+double);
console.log('String = '+string);
console.log('Array = '+array);
console.log('Object = '+object);

//using 'type of' to check each variable'//
console.log("Integer is a " + typeof integer + " with a value of " + integer);
console.log('Double is a ' + typeof double + ' with a value of ' + double);
console.log('String is a ' + typeof string  + ' with a value of ' + string);
console.log('Array is a ' + typeof array + ' with a value of ' + array);
console.log('Object is a ' + typeof object + ' with a value of ' + object);

//array with number and strings....I expect this to be an object datatype//
let myArray = ['alvin ' ,20];
console.log('myArray = '+myArray);
console.log('myArray is a ' + typeof myArray + ' with a value of ' + myArray);

//undefined variable//
let x;
console.log('x = '+x);
console.log('x is a ' + typeof x)

//null variable...usually of object datatype
let ab = null;
console.log('ab = '+ab);
console.log('ab is a ' + typeof ab)

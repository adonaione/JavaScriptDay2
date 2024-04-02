// console.log("Greetings, this is ")

// // Day 2


// //////////////
// // Booleans //
// //////////////

// var myBool1 = true;
// console.log(myBool1, typeof myBool1);

// var myBool2 = false;
// console.log(myBool2, typeof myBool2);

// // Negating Booleans
// console.log(!true);
// console.log(!false);

// // Converting to Booleans
// // use the Boolean() constructor
// var firstName = 'Adonai';
// console.log(Boolean(firstName)); // true - non empty string evaluate to true

// var emptyString = '';
// console.log(Boolean(emptyString)); // false - empty strings evaluate to false

// var someNumber = 55;
// console.log(Boolean(someNumber)); // true - all non-0 numbers evaluate to true

// var zeroNum = 0;
// console.log(Boolean(zeroNum)); // false - 0 evaluates to false

// // undefined and null will always be false
// console.log(Boolean(undefined));
// console.log(Boolean(null));

// // Double Negation - common tactic for converting to bool
// console.log(firstName); // true
// // Use a single ! that gives us the opposite that we would get from passing into Boolean()
// console.log(firstName); //false
// // Add a second ! to negate the original negation
// console.log(!!firstName); // true

// console.log(emptyString)
// console.log(!emptyString);
// console.log(!!emptyString);

// // Chaining Booleans
// console.log('Chainging Booleans:')
// // In Python, 'and' and 'or' -- JS we use && and ||
// console.log('with || or')
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// console.log('with && and')
// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false


// // Short Circuiting

// function t1(){
//     console.log('t1 is running');
//     return false;
// }

// function t2(){
//     console.log('t2 is running');
//     return false;
// }

// function t3(){
//     console.log('t3 is running');
//     return true;
// }

// // When using the && operator, once an expression returns false, no following are ran
// // t1()&&t2()&&t3() // fasle, even tho t3() is true, t3() never gets ran

// // When using the || operator, once something returns true, no following expressions are ran
// t1()||t2()||t3()



// ///////////////////////
// // Null vs Undefined //
// ///////////////////////

// // undefined - means the variable was declared but not given a value aka undefined
// // null - is a value and can be assigned to represent no value
// var myUndefined1;
// var myNull = null;
// var myUndefined2 = undefined; // BIG NO-NO

// console.log(myUndefined1);
// console.log(myNull);
// console.log('types:\n')
// console.log(typeof myUndefined1); // undefined
// console.log(typeof null); // null is an object **KNOWN BUG**

// console.log('Equality check:\n')
// console.log(myUndefined1 == myNull); // true
// console.log(myUndefined1 === myNull); // false
// console.log(myNull === null); // true

// console.clear();

// ///////////////////
// // Let and Const //
// ///////////////////

// // variables declared with var can be redeclared - can be dangerous
// var myCity = 'Chicago'
// console.log(myCity);

// var myCity = 'New York';
// console.log(myCity);

// // variables declared with let and const cannot be redeclared - saves us from ourselves

// let myState = 'Illinois';
// console.log(myState);

// // let myState = 'California';
// // console.log(myState);

// const myCountry = 'USA'
// console.log(myCountry);

// // const myCountry = 'Ireland';
// // console.log(myCountry);


// // let - can be undefined and can reassign a value to a variable
// // const - must have value on instantiation & cannot reassign a value once it is set!
// let myFavColor = 'blue';
// myFavColor = 'green';
// console.log(myFavColor);

// const myFavAnimal = 'dog';
// // myFavAnimal = 'platypus';

// // var - global scoped (function scoped if in function)
// // let and const - block scoped

// if (true){
//     var testVar = 'test'; // var is globally scoped
//     console.log('Inside block:', testVar);
// }
// console.log('Outside Block', testVar);


// if(true){
//     let testLet = 'test let'; // let is block scoped
//     console.log('Inside Block: ', testLet);
// }
// // console.log('Inside Block', testLet); // Uncaught ReferenceError: testLet is not defined


// if (true){
//     let anotherEx = 'This is my example';
//     console.log('Inside Block:', anotherEx);
//     if (true){
//         console.log('Nested Block:', anotherEx);
//     }
// }

// // console.log('Outside Block:', anotherEx); // Uncaught ReferenceError: anotherEx is not defined


// // const is also block-scoped
// if (true) {
//     const testConst = 'testing const';
//     console.log('Inside:', testConst);
// }

// // console.log('Outside:', testConst) // Uncaught ReferenceError: testConst is not defined


// // From now on, use let or const for variable declaration
// console.log(myRandomVarName); // undefined due to "variable hoisting"

// var myRandomVarName = 'random';

// console.log(myRandomVarName);


// console.log(today); // ReferenceError: Cannot access 'today' before initialization

// let today = 'Tuesday';
// console.log(today);


////////////
// Arrays //
////////////

// Declaring
// let people = ["Sri Yogananda", "Ram Das", "Sahdguru", "Buddha"];
// console.log(people);
// console.log(typeof people); // object

// // Accessing
// console.log(people[3])

// console.log(people[-1]) // undefined - negative indices do not work 

// // Arrays have a built in .length property
// console.log(people.length); // 4

// //////////////////
// // Array Methods//
// //////////////////

// // arr.push(value) - add value to end of the arr - returns new length
// console.log(people)

// let returnVal = people.push("Mary Magdaline");
// console.log(people);
// console.log(returnVal); // should be 5, because it returned the new length after adding

// // arr.pop() - will remove the last element and return that element
// let popReturn = people.pop();
// console.log(people);
// console.log(popReturn); // Mary Magdaline returned


// const colors = ['red','orange', 'yellow', 'green', 'blue']
// colors.pop()
// colors.push('violet');
// console.log(colors);

// // arr.unshift(value) will add the value to the beginning and return new length
// console.log(people);

// let unshiftReturn = people.unshift("Master Osho");
// console.log(people);
// console.log(unshiftReturn);


// //  arr.shift() removes the first item from an array and returns it
// let shiftReturn = people.shift();
// console.log(people);
// console.log(shiftReturn); //  Master Osho

// // arr.indexOf9value) - will return the index of the value in the arr or -1 if not present
// console.log(people.indexOf('Buddha'));
// console.log(people.indexOf('Yoda')); // returns -1 bc not in list

// let nums = [10, 20, 15, 10, 12, 30, 20]

// console.log(nums.indexOf(20));
// console.log(nums.indexOf(20, 2));

// // arr.forEach(callbackFn) - will execute the callback function on each element and discard the return value

// people.forEach(function(element){console.log(element)});
// people.forEach(function(person){console.log(`${person} is an enlightened being.`)});



// // Destructuring 
// // Array Deconstructing
// // JS allows us to declare multiple cariables at a time and assign them memebers of the array

// console.log(people);

// let [yogi, psychonaut, guru, joy] = people;

// console.log(yogi);
// console.log(psychonaut);
// console.log(guru);
// console.log(joy);


// let rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// let [r, o, y] = rainbow;

// console.log(r, o, y);

// let finalFour = ['UConn', 'Purdue', 'Alabama', 'NC State'];

// [team1, team2, team3, team4, team5] = finalFour;

// console.log(team1);
// console.log(team2);
// console.log(team3);
// console.log(team4);
// console.log(team5);

// // Rest Operator ...
// console.log(rainbow);
// let [red, orange, yellow, ...others] = rainbow;

// console.log(others);


// // arr.join(string_to_join_on)  method joins all elements of an array into a string separated by commas or a specified separator
// console.log(people.join(', '))

// let things = ['a', 'b', 'c'];

// console.log(things.join('-'));

// // Array Slicing 
// // Allows us to take a portion of the array by its indices. Original arr not modified
// // arr.slice(start, end)

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
// console.log(months);
// console.log(months.slice());
// console.log(months.slice(3));  // From index 3 till end
// console.log(months.slice(1, 4));    // From Index 1 till but not including 4
// console.log(months.slice(-4)); //

// // Array Splicing
// // arr.splice(start, deleteCount, item1, item2, ..., itemN);

// let fruits = ['apple', 'banana', 'peach', 'watermelon'];
// console.log(fruits);

// // Insert an item at an index position (assuming not beginning or end)
// // To add 'pear' after banana in the fruits array
// // start = 2
// // deleteCount = 0
// // item1 = 'pear'
// fruits.splice(2, 0, 'pear');
// console.log(fruits); // original array has been modified


// // insert an item at index postion and remove item that was there **AKA replace**
// // To replace 'peach' with 'orange'
// // start = 3
// // deleteCount = 1
// // item1 = 'orange'
// fruits.splice(3, 1, 'orange')
// console.log(fruits);


// // Insert and/or remove multiple items
// // Replace 'banana' 'pear' and 'orange' with 'kiwi', 'grapes', and 'mango'

// fruits.splice(1, 3, 'kiwi', 'grapes', 'mango');
// console.log(fruits);

// fruits.splice(3, 1, 'dragon fruit', 'lady finger bananas');
// console.log(fruits);


// /*
//     Make an Array of your favorite foods (minimum 4). Then using the methods we have learned, add "Fried Tarantulas" to the end of the array, then add "Mokh Mchermel" to the front. Then, using a slice of the now modified array, print your original list of favorite foods without my additions.
// */
// let favFoods = ['yogi bowl', 'curry', 'quinoa', 'kitchari']
// console.log(favFoods);
// favFoods.push(('Fried Tarantulas'));
// console.log(favFoods);
// favFoods.unshift('Mokh Mchermel');
// console.log(favFoods);
// console.log(favFoods.slice(1, 5));

// ///////////////
// // Functions //
// ///////////////


// // Regular Functions

// /* 
// Syntax:

// function: funcName(param1, param2, etc.){
//     code to run when executed
// }
// */

// function addNums(){
//     let num1 = 10;
//     let num2 = 20;
//     return num1 + num2;
// }

// console.log(addNums);
// console.log(typeof addNums);

// // to execute - funcName() OR funcName(arg1, arg2, etc)
// console.log(addNums());


// // Using Parameters
// function addNumsAgain(num1, num2){
//     return num1 + num2;
// };

// console.log(addNumsAgain); // returns function

// console.log(addNumsAgain(16, 28)); // returns 44

// console.log(addNumsAgain(15)); // returns NaN


// function logArgs(a, b){
//     console.log('A is', a, typeof a)
//     console.log('B is', b, typeof b)
// }

// logArgs(22); // A is number 22, B is undefined **NO ERROR**

// // logArgs(b=13, a='hello') /// keyword Arguments are non-existent in JS


// /*
// Create a JS Function that takes a first name and last name and returns a String that says Hello first name last name. The input would be something like:

// "Bo", "Jackson"

// and the output would be:

// "Hello Bo Jackson"
// */

// function greeting(fName, lName){
//     return  `Hello ${fName} ${lName}`
// }

// console.log(greeting('Bo', 'Jackson'))
// console.log(greeting('Michael', 'Jackson'))



// // Arrow Functions

// // The most basic arrow function

// let doNothing = () => {};
// console.log(doNothing);
// console.log(typeof doNothing);

// /*
// Syntax
// const funcName = (param1, param2) => {
//     //do stuff
//     return value
// }


// * if only one parameter, the parentheses are optional
// const funcName = param1 => {
//     // do stuff
//     return value
// }


// * if your function is one line returning a value, you can use the implicit return
// const funcName = (param1, param2) => returnValue

// */


// const addNums2 = (num1, num2) => {
//     num1 += 10;
//     num2 += 10;
//     return num1 + num2;
// }

// console.log(addNums2);
// console.log(typeof addNums2);

// console.log(addNums2(4, 8))

// // with one param
// const squareNum = num => {
//     return num ** 2
// }

// console.log(squareNum);
// console.log(typeof squareNum);

// console.log(squareNum(10));
// console.log(squareNum(4));


// // Implicit Return
// const squareNum2 = num => num ** 2;

// console.log(squareNum2);
// console.log(typeof squareNum2);

// console.log(squareNum2(10));
// console.log(squareNum2(4));


// // The Spread Operator ...

// // ... As a rest operator
// // let [x, y, ...z] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // console.log(x);
// // console.log(y);
// // console.log(z);


// function useSpread(x, y, z){
//     console.log('x:', x);
//     console.log('y:', y);
//     console.log('z:', z);
//     return x * y + z
// };

// let myNumArr = [11, 2, 7];

// // traditionally we can call our function like this:
// let myNewNum = useSpread(11, 2, 7);
// console.log(myNewNum);

// // Or like this
// let myNewNum2 = useSpread(myNumArr[0], myNumArr[1], myNumArr[2]);
// console.log(myNewNum2);


// // using the spread operator
// let myNewNum3 = useSpread(...myNumArr);
// console.log(myNewNum3);


// // We can also use the spread operator when making copies of the array
// let myNumArray2 = [...myNumArr];
// console.log(myNumArray2);

// let myNumArr3 = ['hello', ...myNumArr, 'goodbye'];
// console.log(myNumArr3);


// // Array Methods with callback functions!

// // Array.forEach(callbackFn)   -> callbackFn(element, index, arr)

let baseballTeams = ['White Sox', 'Red Sox', 'Tigers', 'Cardinals', 'Mets', 'Dodgers', 'Giants'];

// function myCallBack(element, index, arr){
//     console.log('Element:', element);
//     console.log('Index:', index);
//     console.log('Array:', arr);
//     return 10
// }

// baseballTeams.forEach(myCallBack);

// baseballTeams.forEach( e => console.log(`I like to watch the ${e} play baseball`))

// baseballTeams.forEach( (e, i) => console.log(`${e} is at index ${i}`))

// // Array.map(callbackFn) -- callbackFn (element, index, arr)
// // return a new array with the return values of callbackFn on each element

let teamLengths = baseballTeams.map( team => team.length );
console.log(teamLengths);

let teamIndex = baseballTeams.map( (el, idx) => el + idx );
console.log(teamIndex);

// // Array.filter(callbackFn) - callackFN(element.=, index, arr)
// // returns a new array of elements that pass the test implemented by the provided function

// function isMultiWords(teamName){
//     let teamWords = teamName.split(' ')
//     return teamWords.length >= 2
// }

// let multiMap = baseballTeams.map(isMultiWords);
// console.log(multiMap);

// let multiFilter = baseballTeams.filter(isMultiWords); console.log(multiFilter)


// // Array.reduce(callbackFn) - callbackFn(accumulator, currentValue)

// let numbers = [2, 4, 7, 9, 6, 1, 5];

// function reduceCallback(acc, current){
//     console.log('Accumulator', acc);
//     console.log('Current Value', current);
//     console.log('Returns', acc + current);
//     console.log('------------------------------------------------')
//     return acc + current
// };

// let total = numbers.reduce(reduceCallback);
// console.log(total);


//////////////////
// Flow Control //
//////////////////

// Review ifs

let myAge = 25;

let eligibility;
if (myAge > 35){
    eligibility = true;
} else {
    eligibility = false
};

console.log(eligibility);

// Ternary Operator
// boolean or condition ? actionIfTrue : actionIfFalse
let val1 = 20;
let val2 = 15;

let val3 = (val1 > val2) ? 'Hello' : 'Goodbye';
console.log(val3);


let birthYear = 1999;

let myGeneration;
if (birthYear >= 1946 && birthYear <= 1964){
    myGeneration = 'Boomer'
} else if (birthYear <= 1979){
    myGeneration = 'Gen X'
} else if (birthYear <= 1995){
    myGeneration = 'Millenial'
} else {
    myGeneration = 'Zoomer'
};

console.log(myGeneration);

let myGeneration2 = (birthYear <= 1964) ? 'Boomer' : (birthYear <= 1979) ? 'Gen X' : (birthYear <= 1995) ? 'Millenial' : 'Zoomer';
console.log(myGeneration2);

// Traditions For Loop
// for (varName=startingValue; stopCondition; varName increment/decement)

// Simple Example
for (let i=0; i< 5; i++){
    console.log(i)
};

console.log('----------')

for (let j=10; j <= 100; j+=5){
    console.log(j);
}

console.log('----------')

for (let k=10; k>0; k--){
    console.log(k);
};

// use traditional for loop to loop over an array
// start = 0 to represent index
// stopCondtion < arr.length
// increment by 1

console.log(baseballTeams);

for (let idx=0; idx < baseballTeams.length; idx++){
    console.log(baseballTeams[idx])
}

// For...of Loop
// Loop over an iterable giving each iterable item
// Syntax:  for (let element of iterable){ do something for each }

for (let team of baseballTeams){
    console.log(team);
}

// ---works with string as well
let firstPresident = 'George Washington';

for (let chr of firstPresident){
    console.log(chr)
};

// For...in loop
// Will loop thorugh the properties of an opbject 
// an Array is a special type of object where the indices are properties

for (let i in baseballTeams){
    console.log(i);
}

let exObj = {firstName: 'Brian', lastName: 'Stanton', city: 'Chicago'};

for (let key in exObj){
    console.log(key);
};

// while loop
// Sytnax :
// while(condition){ code to run while condition is true }

let randomNumber = Math.floor(Math.random() * 10);
console.log('start', randomNumber);

while (randomNumber != 5){
    randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
}

console.log('end', randomNumber);

// do...while loop
// Syntax:
// do { statement } while (condition);
// The do is run AT LEAST one time

let myNum = 10;

do {
    myNum += 10;
    console.log(myNum);
} while (myNum <= 100);


// Switch Case


/////////////
// Objects //
/////////////


// Declaring


// Accessing 


// Deleting Keys


// Object Desctructuring


// Optional Chaining


// Nullish Coalesing Operator


// Object Equality

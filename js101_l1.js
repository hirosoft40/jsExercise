function lvl1exercise1() {
	// Declare a variable without instantiating it and return it!
    i =0;
    return i
}

function lvl1exercise2() {
	// Declare and instantiate a number and return it
    var i = 2;
    return i;
}

function lvl1exercise3() {
	// Declare and instantiate a floating point number that isn't a whole number and return it
    var i = 1.41421356;
    return i;  
}

function lvl1exercise4() {
	// Declare and instantiate a string "Hello World!" and return it
    var str = "Hello World!"
    return str;
}

function lvl1exercise5() {
	// Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
    var arr = ["Hello World!",4]
    return arr;
}

function lvl1exercise6() {
	// Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
    var obj ={"key1":"Hello World!", "key2":4}     
    return obj;
}

function lvl1exercise7() {
	// Declare and instantiate a boolean value 'false' and return it
    var bl = false;
    return bl;
}

function lvl2exercise1(num1, num2) {
	// Return the sum of num1 and num2
    return num1 + num2
}

function lvl2exercise2(num1, num2) {
	// Return the difference of num1 and num2
    return num1 - num2
}

function lvl2exercise3(num1, num2) {
	// Return the multiplication of num1 and num 2
    return num1 * num2
}

function lvl2exercise4(num1, num2) {
	// Return the division of num1 and num2
    return num1 / num2
}

function lvl2exercise5(num1) {
	// Add 2 to num1 using += and return it
    return num1+=2
}

function lvl3exercise1() {
	// Create a "hello" and a "world", return the concatenation of the two
    return "hello" + "world"
}

function lvl3exercise2() {
	// Create a "hello" and a 12, return the concatenation of the two
    return "hello" + 12
}

function lvl3exercise3() {
	// Create a variable that equals 12 and convert it to a string with concatenation. Return it.
    var num =12;
    return num+"";
}

function lvl3exercise4() {
	// Create a "hello world!" string. Return the length of the string
    return "hello world!".length
}

function lvl3exercise5() {
	// Create a "hello world!" string. Return the index of the word "world".
	return "hello world!".indexOf("world")
}
function lvl4exercise1() {
	// Return the boolean value "true"
	return true;
}

function lvl4exercise2() {
	// Return the boolean value "false"
    return false;
}

function lvl4exercise3(bool) {
	// Return the opposite of the input boolean value
    return !bool;
}   

function lvl4exercise4(bool1, bool2) {
	// Return the logical "and" of the input boolean values
    return bool1 && bool2;
}

function lvl4exercise5(bool1, bool2) {
	// Return the logical "or" of the input boolean values
    return bool1 || bool2;
}

function lvl4exercise6(bool1, bool2) {
	// Return the logical "equivalence" of the input boolean values
	return bool1 == bool2;
}

function lvl5exercise1() {
	// Push the string "hello" into the array and return it.
	var array = [1, "adam"];
    array.push("hello")
    return array
}

function lvl5exercise2() {
	// Remove the last element from the array and return it
	var array = [1, "adam"];
    array.pop();
    return array
}

function lvl5exercise3() {
	// Return the length of the array
	var array = [1, "adam"];
    return array.length
}

function lvl5exercise4() {
	// Return the index of "adam" in the array
	var array = [1, "adam"];
    return array.indexOf("adam");
}
function lvl6exercise1(num) {
    // Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
    var dic = {1:'hello', 2:'world'}
    
    if (num in dic){
        return dic[num];
    } else {
        return 'bye';
    }

	// if (num == 1){
    //     return 'hello';
    // }else if (num ==2){
    //     return 'world';
    // } else {
    //     return "bye";
    // }
}


function lvl6exercise2() {
	// Push 10 "hello" strings into the array using a for loop, then return it
	var array = [];
    for (var i =0;i<10;i++){
        array.push("hello")
    }
    return array;
}

function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
    while (array.length){
        array.pop();
    }
    return array;
}
// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"
function finalFunction(num){
    var arr = []
    for (var i =0;i<num;i++){
        arr.push("A")
    }
    return arr;
}


console.log(lvl1exercise1());
console.log(lvl1exercise2());
console.log(lvl1exercise3());
console.log(lvl1exercise4());
console.log(lvl1exercise5());
console.log(lvl1exercise6());
console.log(lvl1exercise7());
console.log(lvl2exercise1(1,2));
console.log(lvl2exercise2(3,4));
console.log(lvl2exercise3(5,6));
console.log(lvl2exercise4(7,8));
console.log(lvl2exercise5(9));
console.log(lvl3exercise1());
console.log(lvl3exercise2());
console.log(lvl3exercise3());
console.log(lvl3exercise4());
console.log(lvl3exercise5());
console.log(lvl4exercise1());
console.log(lvl4exercise2());
console.log(lvl4exercise3(false));
console.log(lvl4exercise4(false, true));
console.log(lvl4exercise5(false, true));
console.log(lvl4exercise5(false, true));
console.log(lvl5exercise1());
console.log(lvl5exercise2());
console.log(lvl5exercise3());
console.log(lvl5exercise4());
console.log(lvl6exercise1(2));
console.log(lvl6exercise2());
console.log(lvl6exercise3());
console.log(finalFunction(5));
// JS function exercise
//=====Variables======
var myArr = [2, 3, 4, 5, 6, 7, 0, 1, -10, -3, -8, 100];
var cities = [{
    name: 'Los Angeles',
    temperature: 60.0
}, {
    name: 'Atlanta',
    temperature: 52.0
}, {
    name: 'Detroit',
    temperature: 48.0
}, {
    name: 'New York',
    temperature: 80.0
}];

var people = ['Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben'];
var arrs = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];

//====

// positive numbers
const positive = myArr.filter(ele => ele >= 0);

// even numbers
const even = myArr.filter(ele => ele % 2 == 0);

// square the Numbers
const sqrt = myArr.map(ele => ele ** 2);

// cities with cooler than 70F
const citiesWith70F = cities.filter(ele => ele.temperature < 70);

// cities with cooler than 70F - name only
const citiesName = cities.filter(ele => {
    return ele.temperature < 70;
}).map(ele => ele.name);

const cityNames = cities => cities.map(x => x.name);

// good job people
const goodjob = people.map(ele => {
    return "Good job, " + ele + "!."
});

// sort people
const sortPpl = people.sort();

// sort people
const sortPplByNameLength = people.sort((a, b) => {
    return b.length - a.length;
});

// sort an array, 3 ???????????????????
// const compareSum = arrs.sort(function (arr1, arr2) {
//     if (arr1.reduce((acc1, ar1) => {
//             return acc1 + ar1;
//         }, 0) > arr2.reduce((acc2, ar2) => {
//             return acc2 + ar2;
//         }, 0)) return arr1;

//     if (arr1.reduce((acc1, ar1) => {
//             return acc1 + ar1;
//         }, 0) < arr2.reduce((acc2, ar2) => {
//             return acc2 + ar2;
//         }, 0)) return arr1;


// })
const compareSum = (arrs) => arrs.sort((x,y) => sum(x) - sum(y));


// 3 times
const fun = () => {
    return console.log("Hello World.");
};
function call3Times(fun) {
    fun();
    fun();
    fun();
}

//n times
function callNTimes(num, func){
    for (var i=0;i<num;i++){
        console.log(func);
    }
    return 
}

//Sum an array
const sumNum = myArr.reduce((acc, ar) => {
    return acc + ar
}, 0);

//Acronym
var list = ['very', 'important', 'person'];
const acronym = list.reduce((acc, lis) => {
    return acc + lis[0].toUpperCase();
}, [])

//Bonus:forEach
// var arra = [ 
//     { name: 'Bob' }, 
//     { name:'Alice' }, 
//     { name:'Joe' } ]; 
//     forEach(arr, function(person) { 
//        console.log('Hello, ' + person.name + '!'); 
//     });

//Bonus: map

// Bonus: cipher
function cipher(text) {
    var oldCipher = text.split('')
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var result = oldCipher.reduce(function(acc, curVal){
        let num = alphabet.indexOf(curVal) 
        if (num > 12) {
            curVal = alphabet[num-13]
        }else{
            curVal = alphabet[num+13]
        }
        return acc + curVal;
    },[])
    
    return result;
} 

console.log(positive);
//console.log(even)
//console.log(sqrt)
//console.log(citiesWith70F)
//console.log(citiesName)
//console.log(goodjob)
//console.log(sortPpl)
//console.log(sortArr);
//console.log(sortPplByNameLength)
//console.log(compareSum);
//call3Times(fun);
//callNTimes(5,fun());
//console.log(sumNum)
//console.log(acronym)
//console.log(cipher('GENIUS'))
//console.log(arra())
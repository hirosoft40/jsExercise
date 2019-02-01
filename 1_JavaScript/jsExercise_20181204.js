
//Madlib
var nadkub = function(name, subject) {
    console.log(name + "'s favorite subject in school is " + subject +".")
};

//Tip Amount
var tipAmount = function(amt, level){
    var service ={"good":0.2, "fair":0.15, "bad":0.1}
    if (level in service) {
        return amt * service[level];
    } else{
        console.log("please choose from good/fair/bad.");
    }
};

// Total bill amount
var totalAmount = function(amt, level){
    return tipAmount(amt, level)+amt;
};

// Print Numbers
var printNumbers = function(start, end){ 
    for (start; start <= end; start++){
        console.log(start)
    }
};

// print a squre
var printSquare = function(num){
    for (var y=0; y<=num; y++){
        var square="";
        for (var x=0; x <= num; x++){
            square = square.concat("*")
        }
        console.log(square)
    }
};

//print a box
var printBox = function(width, height){
    var starHead="", starMid="";
    for (var i=1; i<=width; i++){
        starHead += "*";
        starMid += " ";
        }
    for (var i=1; i<=height; i++){
        if (i === 1 || i === height){
            console.log(starHead);
        } else{
            console.log("*"+starMid.slice(0,width-2)+"*");
        };
    };
};

// Print a Banner
var printBanner = function(str){
    var stars="";
    for (var i=0; i<=str.length+3;i++){
        stars+="*";
    }
    console.log(stars);
    console.log("* "+str+" *");
    console.log(stars);
}

// Leetspeak
var leetspeak = function(str){
    var leets = {"a":'4', "e":'3', "g":'6', "l":'1', "o":'0', "s":'5', "t":'7'}
    var newStr="";
    for (i of str){
        (i.toLowerCase() in leets? newStr+=leets[i]:newStr+=i);
        };
    console.log(newStr);
};
//Long-long vowels
function longLongVowels(str){
    var newStr= str.replace("ee","eeeee").replace("aa","aaaaa").replace("oo","ooooo").replace("uu","uuuuu").replace("ii","iiiii");
    console.log(newStr);
}

//Just the positives
var positives = function(arr){
    var newArr=[];
    for (i of arr){
        if (i >=0){
            newArr.push(i)
        }
    }
    console.log(newArr);
}

//Caesar Cipher & decipher ==> works for both.
function cipher(str){
    var newStr ="";
    for (var i =0;i<str.length;i++){
        var num = str.charCodeAt(i);
        if (num == 32){
            newStr+=" ";
        }else if ((97 <= num && num <=109) || (65 <= num && num <=77)){
            newStr+=String.fromCharCode(num+13);
        }else{
            newStr+=String.fromCharCode(num-13);
        }
    }
    console.log (newStr);
}

nadkub("Hiroko", "art");
console.log("Tip Amount is: $" +tipAmount(100,"good"));
console.log("Total Amount is: $" +totalAmount(100,"good"));
printNumbers(1, 10);
printSquare(10);
printBox(7,10);
printBanner("Welcome to DigitalCrafts");
leetspeak("Hello");
longLongVowels("cheese");
positives([1,-3,5,-3,0]);
cipher("Genius without education is like silver in the mine");
cipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar");
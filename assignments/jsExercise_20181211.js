function Person(name, email, phone){
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other){
    console.log(`Hello ${other.name}, I am ${this.name}!`);
}

let sonny = new Person('Sonny', "sonny@hotmail.com", "483-586-4948");
let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

sonny.greet(jordan)  // 3
jordan.greet(sonny) // 4

//5 & 6
Person.prototype.contact = function(){
    console.log(`${this.name}'s email is: ${this.email}, phone number is ${this.phone}`)
};
sonny.contact();
jordan.contact();

// Card Constructor
function Card(point, suit){
    this.point = point,
    this.suit = suit
};
Card.prototype.getImageUrl = function(){
    return `images/${this.point}_of_${this.suit}.png`
}
Card.prototype.getCard = function(){
    return this.point+this.suit
}
let myCard = new Card(5, 'diamonds')

console.log(myCard.getImageUrl());

//Hand Constructor;
function Hand(){
    let cards = [];
};

Hand.prototype.addCard = function(){
    this.cards.push(this.getCard)
    console.log(getCard);
}

Hand.prototype.getPoint() = function(){
    let total = 0;
    for (let i in cards){
        total += i;
    }
    return total;
}

var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'))

function Deck(){
    this.draw = function(){

    }
}

//== object exercise 2
var mom = { 
    firstName: 'Alice', 
    lastName: 'Wong', 
    eyeColor: 'brown', 
    hairColor: 'black' 
}; 

var daughter = { 
    firstName: 'Ilene', 
    hairColor: 'brown' 
};




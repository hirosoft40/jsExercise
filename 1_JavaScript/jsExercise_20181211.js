function Person(name, email, phone){
    this.name = name;
    this.email = email;
    this.phone = phone;
}

Person.prototype.greet = function(other){
    console.log(`Hello ${other.name}, I am ${this.name}!`);
}

// Given above code, Write code to

// Write code to Instantiate an instance object of Person with name of 'Sonny', email of 'sonny@hotmail.com', and phone of '483-485-4948', store it in the variable sonny.
let sonny = new Person('Sonny', "sonny@hotmail.com", "483-586-4948");

// Write code to Instantiate another person with the name of 'Jordan', email of 'jordan@aol.com', and phone of '495-586-3456', store it in the variable 'jordan'.
let jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

sonny.greet(jordan)  // 3 Write code to Have sonny greet jordan using the greet method.

jordan.greet(sonny) // 4 Write code to Have jordan greet sonny using the greet method.

//5 & 6 Write a statement to print the contact info (email and phone) of Sonny.Write another statement to print the contact info of Jordan.
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


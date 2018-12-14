function Person(name, email, phone) { 
     this.name = name; 
     this.email = email; 
     this.phone = phone; 
} 

Person.prototype.greet = function(other) { 
     console.log('Hello ' + other.name + ', I am ' + this.name + '!'); 
};

// === JavaScript Objects and Constructors
sonny = new Person('Sonny', 'sonny@hotmail.com','483-485-4948');
jordan = new Person('Jordan', 'jordan@aol.com','495-586-3456');
sonny.greet(jordan)
jordan.greet(sonny)
console.log(sonny.name + "'s email address is: " + sonny.email + ", phone number is: "+sonny.phone)
console.log(jordan.name + "'s email address is: " + jordan.email + ", phone number is: "+jordan.phone)

// ==== Card Constructor
function Card(point, suit){
    this.point = point;
    this.suit = suit;
}
var myCard = new Card(5, 'diamonds');
console.log(myCard.point);
console.log(myCard.suit);

// ==== getImageUrl()
Card.prototype.getImageUrl = function(){
    return 'images/'+this.point+'_of_'+this.suit+'.png'
}

// === hand constructor
function Hand(card) {
    this.card = card;
    this.addCards = []
}

Card.prototype.addCards
// ===deck constructor

//==========Object Exercise 2
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
var irene = Object.create(mom)
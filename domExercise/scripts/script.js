var container = document.querySelector("#container")
container.setAttribute('class', 'container')

//== nav ===
var navContainer = document.createElement('nav');
var navDiv = document.createElement("div");
var navUl = document.createElement("ul")
var navLi1 = document.createElement("li");
var navLi2 = document.createElement("li");
var navLi3 = document.createElement("li");


var navA1 = document.createElement("a");
var navA2 = document.createElement("a");
var navA3 = document.createElement("a");

var navH1 = document.createElement("h1");

navDiv.setAttribute("class","navSetting");
navA1.textContent = "HighOnCoding";

navLi2.setAttribute("class", "nav-item");
navA2.setAttribute("class", "nav-link navLink1");
navA2.textContent = "Home";

navLi3.setAttribute("class", "nav-item");
navA3.setAttribute("class", "nav-link navLink2");
navA3.textContent = "Category";

container.appendChild(navDiv);
navDiv.appendChild(navUl);
navUl.appendChild(navLi1);
navLi1.appendChild(navH1);
navH1.appendChild(navA1);
navUl.appendChild(navLi2);
navLi2.appendChild(navA2);

navUl.appendChild(navLi3);
navLi3.appendChild(navA3);


//== firstRow ===
var firstRowDiv = document.createElement("div");

var firstRowH1 = document.createElement("h1");
var firstRowP = document.createElement("p");

firstRowDiv.setAttribute("class","row firstRow");
firstRowH1.setAttribute("class", "mb-5");
firstRowH1.textContent = "Curse of the Current Reviews ";
firstRowP.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dignissimos quasi repudiandae veritatis ad ut autem, dolorem fugiat accusamus, animi quis unde? Rerum molestiae, modi optio quam blanditiis eaque culpa."

container.appendChild(firstRowDiv);
firstRowDiv.appendChild(firstRowH1);
firstRowDiv.appendChild(firstRowP);


//== secondRow ===
var secondRowDiv = document.createElement("div");

var secondRowh3 = document.createElement("h3");
var secondRowP = document.createElement("p");

var secondRowDivOrange = document.createElement("div");
var secondRowSpan = document.createElement('span');

secondRowDiv.setAttribute("class","row rowContent");
secondRowh3.setAttribute("class", "mb-5");
secondRowh3.textContent = "Hello WatchKit";

secondRowP.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dignissimos quasi repudiandae veritatis ad ut autem, dolorem fugiat accusamus, animi quis unde? Rerum molestiae, modi optio quam blanditiis eaque culpa."
secondRowDivOrange.setAttribute("class", "orange");
secondRowDivOrange.textContent="12 comments"
secondRowSpan.setAttribute('class','ml-3');
secondRowSpan.textContent = '124 likes';

container.appendChild(secondRowDiv);
secondRowDiv.appendChild(secondRowh3);
secondRowDiv.appendChild(secondRowP);
secondRowDiv.appendChild(secondRowDivOrange);
secondRowDivOrange.appendChild(secondRowSpan)


//== thirdRow ===
var thirdRowDiv = document.createElement("div");

var thirdRowh3 = document.createElement("h3");
var thirdRowP = document.createElement("p");

var thirdRowDivOrange = document.createElement("div");
var thirdRowSpan = document.createElement('span');

thirdRowDiv.setAttribute("class","row rowContent");
thirdRowh3.setAttribute("class", "mb-5");
thirdRowh3.textContent = "Hello WatchKit";

thirdRowP.textContent="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum dignissimos quasi repudiandae veritatis ad ut autem, dolorem fugiat accusamus, animi quis unde? Rerum molestiae, modi optio quam blanditiis eaque culpa."
thirdRowDivOrange.setAttribute("class", "orange");
thirdRowDivOrange.textContent="12 comments"
thirdRowSpan.setAttribute('class','ml-3');
thirdRowSpan.textContent = '124 likes';

container.appendChild(thirdRowDiv);
thirdRowDiv.appendChild(thirdRowh3);
thirdRowDiv.appendChild(thirdRowP);
thirdRowDiv.appendChild(thirdRowDivOrange);
thirdRowDivOrange.appendChild(thirdRowSpan)

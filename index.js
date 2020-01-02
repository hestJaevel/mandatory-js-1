window.document.title='Fruit & Vegetables Corp';

const header = document.querySelector("header > h1");

header.textContent = "Fruits & Vegetables Corp";


const menu = document.querySelectorAll("ul > li");
var lastItem = menu[2];

lastItem = lastItem.getElementsByTagName("a");

lastItem[0].setAttribute("href", "#vegetables");
lastItem[0].textContent = "Vegetables";


const mainSection = document.querySelectorAll("main > *");
const mainHolder = mainSection[0].parentElement;
const firstChild = mainSection[0];
const secondChild = mainSection[1];

mainHolder.removeChild(firstChild);
mainHolder.removeChild(secondChild);
mainHolder.appendChild(secondChild);
mainHolder.appendChild(firstChild);


const tr = document.querySelectorAll("thead > tr");
const th = document.querySelectorAll("thead > tr > td");
const newTh2 = document.createElement("th");
let newTh = document.createElement("th");
for (let i = 0; i < th.length; i++) {
  tr[0].removeChild(th[i]);
}

tr[0].appendChild(newTh).textContent = "Name";
tr[0].appendChild(newTh2).textContent = "Email";


const about = document.getElementById("about");
about.textContent = "";
const PTag = document.createElement("p");
PTag.textContent = "We're the best in fruits & vegetables";
about.appendChild(PTag);

const addCss = document.createElement("link");
addCss.setAttribute("rel", "stylesheet");
addCss.setAttribute("href", "main.css");
document.head.appendChild(addCss);


let h2Contact = document.createElement("h2");
h2Contact.textContent = "Contact";
mainHolder.insertBefore(h2Contact, mainSection[0]);
let h2About = document.createElement("h2");
h2About.textContent = "About";
mainHolder.insertBefore(h2About, document.getElementById("about"));
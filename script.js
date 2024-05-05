const openerText = document.getElementById("opener");

openerText.style.color = "white";

const percentage = document.getElementById("percentage");

percentage.style.textAlign = "center";

document.querySelector("h3").innerHTML = "<strong>Age</strong> and <strong>Gender</strong> play a huge roll because...um well...I have no clue just know it's <i>IMPORTANT!</i>"

let best = document.getElementById("myList").firstChild.innerHTML;
document.getElementById("theBest").innerHTML = best;

const p = document.createElement("p");
const pText = document.createTextNode("Now doesn't this look so refreshing? A nice, tall glass of water will definitely uplift anyones day!");

p.appendChild(pText);
document.getElementById("waterGlass").appendChild(p);
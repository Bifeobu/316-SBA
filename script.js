const openerText = document.getElementById("opener");

openerText.style.color = "white";

//////////////////////////////////////////////////////////////

const percentage = document.getElementById("percentage");

percentage.style.textAlign = "center";

//////////////////////////////////////////////////////////////

document.querySelector("h4").innerHTML = "<strong>Age</strong> and <strong>Gender</strong> play a huge roll because...um well...I have no clue just know it's <i>IMPORTANT!</i>"

//////////////////////////////////////////////////////////////

let best = document.getElementById("myList").firstChild.innerHTML;
document.getElementById("theBest").innerHTML = best;

//////////////////////////////////////////////////////////////

const p = document.createElement("p");
const pText = document.createTextNode("Now doesn't this look so refreshing? A nice, tall glass of water will definitely uplift anyones day!");

p.appendChild(pText);
document.getElementById("waterGlass").appendChild(p);

//////////////////////////////////////////////////////////////

function createPost(title, content) {
    
    const frag = document.createDocumentFragment();
  
    const heading = frag.appendChild(document.createElement("h3"));
    heading.textContent = title;
    heading.style.margin = "0px";
  
    frag.appendChild(document.createElement("hr"));
  
    const div = frag.appendChild(document.createElement("div"));
    div.style.padding = "0px 15px";
    div.style.marginBottom = "50px";
  
    div.appendChild(document.createElement("p")).innerHTML = content;
  
    return frag;
  }
  
  const posts = [
    {
      id: 0,
      title: "Fact #2",
      content: "Water is composed of two elements, Hydrogen and Oxygen. 2 Hydrogen + 1 Oxygen = H2O."
    },
    {
      id: 1,
      title: "Fact #3",
      content: "75% of the human brain is water and 75% of a living tree is water."
    },
    {
      id: 2,
      title: "Fact #4",
      content: "A person can live about a month without food, but only about a week without water."
    },
    {
      id: 3,
      title: "Fact #5",
      content: "Water expands by 9% when it freezes. Frozen water (ice) is lighter than water, which is why ice floats in water."
    },
  ]
  const post1 = createPost("Fact #1", "There is the same amount of water on Earth as there was when the Earth was formed. The water from your faucet could contain molecules that dinosaurs drank")
//   console.log(post1)
  
  document.body.appendChild(post1)
  
  
  for (let i = 0; i < posts.length; i++) {
    const post = createPost(posts[i].title, posts[i].content)
  
    document.body.appendChild(post)
  }

  //////////////////////////////////////////////////////////////

  function button() {
    document.getElementById("lemons").setAttribute("class", "lemonColor")

    let message;
    if (confirm("Yayyy you clicked me")) {
        message = "IT CHANGED COLOR!";
    } else {
        message = "Aww man, you're missing out";
    }
  }

  //////////////////////////////////////////////////////////////

  const endForm = document.getElementById('endForm');

  endForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    alert(`Thank you for the review ${endForm.querySelector('input').value}!`);
  });

  //////////////////////////////////////////////////////////////

  const btn = document.getElementById("btn");

  btn.addEventListener('mouseover', (e) => {
    document.getElementById("uni").innerHTML += "Don't be shy, click me :)<br>"

  });

const openerText = document.getElementById("opener");

openerText.style.color = "white";

const percentage = document.getElementById("percentage");

percentage.style.textAlign = "center";

document.querySelector("h4").innerHTML = "<strong>Age</strong> and <strong>Gender</strong> play a huge roll because...um well...I have no clue just know it's <i>IMPORTANT!</i>"

let best = document.getElementById("myList").firstChild.innerHTML;
document.getElementById("theBest").innerHTML = best;

const p = document.createElement("p");
const pText = document.createTextNode("Now doesn't this look so refreshing? A nice, tall glass of water will definitely uplift anyones day!");

p.appendChild(pText);
document.getElementById("waterGlass").appendChild(p);

function createPost(title, content) {
    // Creating a DocumentFragment
    const frag = document.createDocumentFragment();
  
    // Anything we do to the fragment here is not
    // processed in the live view of the document.
    // This allows for processing-heavy DOM changes
    // to occur without interrupting user experience.
    // These, however, are rather simple operations.
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
      title: "Functions",
      content: "Functions are the building blocks of code!"
    },
    {
      id: 1,
      title: "Loops",
      content: "Helps with sticking to the DRY principle. Do repetive tasks"
    },
    {
      id: 2,
      title: "Variables",
      content: "How we store values in memory"
    },
    {
      id: 3,
      title: "Arrays",
      content: "If we know arrays, hopefully we'll get a raise"
    },
  ]
  const post1 = createPost("DOM", "We learning about the DOM and it's fun. Also this cohort rocks!")
//   console.log(post1)
  
  document.body.appendChild(post1)
  
  
  for (let i = 0; i < posts.length; i++) {
    const post = createPost(posts[i].title, posts[i].content)
  
    document.body.appendChild(post)
  }
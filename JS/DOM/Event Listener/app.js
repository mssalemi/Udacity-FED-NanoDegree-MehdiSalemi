console.log("HELLO EVENT LISTENER");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


grandparent.addEventListener("click", function(e){
  console.log(`Grandpa - ${e.target}`);
});

// dy default event are bubble events
parent.addEventListener("click", function(e){
  console.log(`Parent - ${e.target}`);
});

// dcan change by adding third paremeter
//would 
child.addEventListener("click", function(e){
  console.log(`Child - ${e.target}`);
});

// ADD a custom div to the page, and add a bunch of paragraphs
const myCustomDiv = document.createElement("div");

for (let i=0; i < 200; i++) {
  // creates element
  const newElement = document.createElement('p');
  newElement.textContent = `${i}`;
  // adds the new element to the custom div
  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener("click", function(e) {
  // MED - practicing checking content of inner text
  if ((e.target.textContent%2) == 0) {
    console.log(`INDEX ${e.target.textContent} is EVEN`);
  } else {
    console.log(`Paragraph <p> of index ${e.target.textContent} was clicked!`);
  }
  console.log(e.target.nodeName);
  // MED - node name for parargraphs is what tag it is in 
  // would be the inner most TAG 
  //nodeName comes out as capitals - would need to switch to lower case in some situations
});

// 
// Know  when the DOM is ready
// The DOM is built incredmentally
// DOMContentLoaded
/*
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>
    Can put this into the code at the start, adds a listen when all the DOM content is loaded
    it will then do actions to the documenet, but will throw error without as the DOM content
    wont be loaded 

      on load function is similar, but waits until all images files and other content are loaded too
    
*/

// Test Performance on 
// Option 1 - 
// Adding Paragraphs Individially to Page
// Option 2- 
// Add paragraphs to custom Div then add to page. 

// OPTION 1 - 
let startTimeTest = performance.now();
for (let i=0; i < 1000; i++) {
  const newElement = document.createElement('p');
  newElement.innerText=`o1 Paragraph Nuumber ${i}`;

  document.body.appendChild(newElement);
}
let endTimeTest = performance.now();
console.log(startTimeTest - endTimeTest);

// OPTION 2 
startTimeTest = performance.now();
let custDiv = document.createElement('div');

for (let i=0; i < 1000; i++) {
  const newElement = document.createElement('p');
  newElement.innerText=`o2 ParagraphNuumber ${i}`;

  custDiv.appendChild(newElement);
}
document.body.appendChild(custDiv)
endTimeTest = performance.now();
console.log(startTimeTest - endTimeTest);

// option 2 is much faster 

/// Bring in DOCUMENT FRAGEMENT 
// Lightweight DOM Tree
startTimeTest = performance.now();
let newFrag = document.createDocumentFragment()

for (let i=0; i < 1000; i++) {
  const newElement = document.createElement('p');
  newElement.innerText=`o3 ParagraphNuumber ${i}`;

  newFrag.appendChild(newElement);
}
document.body.appendChild(newFrag)

endTimeTest = performance.now();
console.log(startTimeTest - endTimeTest);
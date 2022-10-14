let body = document.body;
const h2 = document.querySelector("h2");
const input = document.getElementById("input-field");
const ul = document.getElementById("items-to-shop");
const listItems = document.querySelectorAll("li");
const err = document.getElementById("error");
const lis = ul.children;
let c = 0;
let button = document.getElementById("btn");
button.addEventListener("click", list);

// adding an event listner to each li\
for (let p = 0; p < lis.length; p++) {
  lis[p].addEventListener("click", counter);
}

function list(e) {
  console.log(ul.children);
  if (input.value !== "") {
    for (let i = 0; i < ul.children.length; i++) {
      console.log(ul.children[i].innerText);
      if (ul.children[i].innerText === input.value) {
        err.innerText =
          "Item already exists click on the item to increase its quantity";
        input.value = "";
        return;
      }
    }
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
  }
}
function counter() {
  c++;
  this.innerText = `${this.innerText} X${c}`;
}

// write a condition
/* if the input value is already present in the list, return nothing
    if u want to take it a step further let the list value show a x2
*/

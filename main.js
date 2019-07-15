const submitButton = document.querySelector(".submit");
submitButton.onclick = makeList;
let lightSwitch = document.querySelector("#slider");

lightSwitch.addEventListener("swapJS", function(event) {
  if ((lightSwitch.checked)) {
    // document.getElementsByClassName("").setAttribute("src", "./arrayAdd.js");
    // document
    //   .getElementById("bodMod")
    //   .setAttribute("style", "background-color: purple;");
    document.getElementsByClassName("prompt").innerText="checked";}})
//   } else {
//     document.getElementById("switch").setAttribute("src", "./main.js");
//     lightSwitch = 1;
//   }
// });

function makeList(event) {
  event.preventDefault();
  deletePreviousList();

  const inputBox = document.querySelector(".user-input");
  const num = parseInt(inputBox.value) + 1;
  addNewLI(inputBox);
}

function addNewLI(text) {
  let num = parseInt(text.value) + 1;
  for (let i = 1; i < num; i++) {
    const ul = document.querySelector(".list");
    const li = document.createElement("li");

    li.innerText = i + text.value;
    ul.appendChild(li);
  }
}

for (let i = 1; i < num; i++) {
  addNewLI(i);
  if (i % 2 === 0) {
    makeLatestLIBold();
  }
}
function deletePreviousList() {
  const ul = document.querySelector(".list");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}

function makeLatestLIBold() {
  const ul = document.querySelector(".list");
  const li = ul.lastChild;
  li.style.fontWeight = "bold";
}

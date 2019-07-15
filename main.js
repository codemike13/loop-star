const goButton = document.querySelector("#go");
const modeSwitch = document.querySelector("#array-display");
const body = document.querySelector("#bodMod");
const indexDiv = document.querySelector("#indexNum-div");
const tgtButton = document.querySelector("#target");
const inputBox = document.querySelector("#user-input");
const indexNumber = document.querySelector("#index-number");
const clearList = document.querySelector("#clear");
const printButton = document.querySelector("#printArray");
printButton.onclick = printArrayAll;
clearList.onclick = deletePreviousList;
goButton.onclick = makeList;
modeSwitch.onclick = arrayMode;
tgtButton.onclick = target;
var mode = 1;
var stringStore = [];

// ///////// Event Listener function for "enter" key ////////////
inputBox.addEventListener("pressEnter", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
   inputBox.requestFullscreen();
   return false;
  }
})
/////////////////////////////////////////////////////////////////
function arrayMode(event) {
  event.preventDefault();
  deletePreviousList();
  if (mode !== -1) {
    modeSwitch.style.backgroundColor = "red";
    modeSwitch.innerText = "Array Mode : ON";
    indexDiv.style.display = "block";
    tgtButton.style.display = "block";
    mode = -1;
    console.log(mode);

    return false;
  }

  if (mode === -1) {
    modeSwitch.innerText = "Array Mode : Off";
    modeSwitch.style.backgroundColor = "rgb(0,123,255)";
    indexDiv.style.display = "none";
    tgtButton.style.display = "none";
    mode = 1;
    console.log(mode);

    return false;
  }
}

function makeList(event) {
  event.preventDefault();
  deletePreviousList();

  const userString = inputBox.value;
  if (mode === -1) {
    addToArray(userString);
    console.log("added to array");
  } else {
    addNewLI(inputBox);
  }
}

function addNewLI(text) {
  let num = parseInt(text.value) + 1;
  const ul = document.querySelector(".list");

  for (let i = 1; i < num; i++) {
    const li = document.createElement("li");
    li.innerText = i;
    ul.appendChild(li);
    if (i % 2 === 0) {
      makeLatestLIBold();
    }
  }
}

function addToArray(string) {
  stringStore.push(string);
}

function target(event) {
  event.preventDefault();
  // deletePreviousList();
  const ul = document.querySelector("#array-list");
  const printArrayIndex = document.querySelector("#current-string");
  printArrayIndex.innerText =
    "Index position " +
    parseInt(indexNumber.value) +
    " : " +
    stringStore[parseInt(indexNumber.value)];
}

function printArrayAll(event) {
  event.preventDefault();

  const ul = document.querySelector("#array-list");

  for (let i = 0; i < stringStore.length; i++) {
    const li = document.createElement("li");
    li.innerText = "Index position " + i +" "+stringStore[i];
    ul.appendChild(li);
  }
}
function deletePreviousList() {
  event.preventDefault();
  
if(mode === -1){
  const ul = document.querySelector("#array-list");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}else{
  const ul = document.querySelector(".list");
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
}
}



function makeLatestLIBold() {
  const ul = document.querySelector(".list");
  const li = ul.lastChild;
  li.style.fontWeight = "bold";
}

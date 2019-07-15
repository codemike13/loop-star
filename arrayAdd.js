const submitButton = document.querySelector(".submit");
submitButton.onclick = makeList;

function makeList(event) {
    event.preventDefault();
    deletePreviousList();

    const inputBox = document.querySelector(".user-input");
    const num = parseInt(inputBox.value) + 1;
    for (let i = 1; i < num; i++) {
        addNewLI(i);
        if (i % 2 === 0) {
            makeLatestLIBold();
        }
}

function addNewLI(text) {
        const ul = document.querySelector(".list");
        const li = document.createElement("li");

        li.innerText = i + text.value;
        ul.appendChild(li);
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

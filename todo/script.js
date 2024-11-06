const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document  .getElementById("button");

function addTask() {
    if (inputBox.value === '') {
        alert("Deine ToDo kann nicht leer sein...")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

inputBox.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addButton.click();
    }
});

listContainer.addEventListener("click", function (e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    } else
        if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
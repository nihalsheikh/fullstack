let tName = document.querySelector("#tName"); // input tName
let tDetails = document.querySelector("#tDetails") // input tDetails
let btn = document.querySelector("button") // Add task button

let table = document.querySelector("table");
let ul = document.querySelector("#myTasks");

let tbody = document.createElement("tbody");
let li = document.createElement("li");

let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");

let del = document.createElement("button");
del.innerText = "Delete Task";
del.classList.add("delete");

// Add tasks
function addTask(e) {
    e.stopPropagation();

// tasks in list
    li.innerText = tDetails.value;
    li.classList.add("item")
    ul.appendChild(li);
    li.appendChild(del);
    // console.log("Task added in list!");

// tasks in table
    table.appendChild(tbody);
    td1.innerText = tName.value;
    td2.innerText = tDetails.value;

    tbody.appendChild(td1);
    tbody.appendChild(td2);
    tbody.appendChild(td3);
    td3 = del;

    td3.innerText = "Delete Task";
    td3.classList.add("delete");
    // console.log("Task added in table!");

// Reset input fields
    tName.value = "";
    tDetails.value = "";
}

function delTask() {
    ul.addEventListener("click", function() {
        let par = this.parentElement;
        par.remove();
        console.log("task deleted");
    })

    // let delBtns = document.querySelectorAll(".delete")
    // for(delBtn of delBtns) {
    //     delBtn.addEventListener("click", function() {
    //         let par = this.parentElement;
    //         console.log(par);
    //         par.remove();
    //     })
    // }
}

btn.addEventListener("click", addTask);
del.addEventListener("click", delTask);

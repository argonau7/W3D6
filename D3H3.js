function addTask() {
let myNewTask = document.querySelector("#task").value
let taskList = document.querySelector("#taskList")

let li = document.createElement("li")
li.innerText = myNewTask
taskList.appendChild(li)

li.addEventListener("click", (e) => e.currentTarget.classList.toggle("completed"))
}

function changeList() {

let checkbox = document.querySelector("#completedonly").checked
if (checkbox) { 
    let completed = document.querySelectorAll(".completed")
    for(let i = 0; i < completed.length; i ++)
    completed[i].classList.add("hidden")
}
else{
    let hidden = document.querySelectorAll(".hidden")
    for(let i = 0; i < completed.length; i ++)
    hidden[i].classList.remove("hidden")
}
}

function removeEverything() {
document.querySelector("#taskList").innerHTML = ""
}
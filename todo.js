const todoList = [];

const inputTask = document.querySelector(".inputTask");
const addBtn = document.querySelector(".addBtn");
const checkContainer = document.querySelector(".checks");
const allCheckBoxes = document.querySelector("input[type=checkbox]");

let _id = 1
const addTask = function (title, id, done) {
    const task = { title, id, done }
    todoList.push(task)
    displayTasks(task)
}

addBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const inputVal = inputTask.value
    addTask(inputVal, _id++, false)


    // const element = document.createElement("div")
    // element.innerHTML = `<input type="checkbox">
    //                     <label>${inputVal}</label>`
    // checkContainer.appendChild(element)

})



const displayTasks = (todo) => {
    // todoList.forEach(todo => {
    const element = document.createElement("div")
    element.id = "check-" + todo.id
    element.innerHTML = `<input type="checkbox" ${todo.done ? 'checked' : ""}>
             <label>${todo.title}</label>`
    checkContainer.appendChild(element)
    // })
}
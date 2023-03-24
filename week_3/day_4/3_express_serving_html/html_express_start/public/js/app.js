const tasks = [
    {title:'buy groceries', description:'milk, eggs, cheese'},
    {title:'learn js', description:'learn express'},
]

document.addEventListener('DOMContentLoaded', ()=>{
    const list = document.querySelector('#todo-list')
    for(let task of tasks) {
        let taskElement = document.createElement('li')
        taskElement.innerHTML = `<strong>${task.title}:</strong> ${task.description}`
        list.appendChild(taskElement)
    }
})
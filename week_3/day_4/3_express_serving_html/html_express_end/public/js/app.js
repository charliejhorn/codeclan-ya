const tasks = [
    {title: "Buy Groceries", description : "Milk, Cheese, Beans" },
    {title:"Learn JavaScript", description: "Learn an awesome language"}

]

document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#todo-list');
    for (let task of tasks) {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.title} - ${task.description}`
        list.appendChild(taskItem);
    }
})
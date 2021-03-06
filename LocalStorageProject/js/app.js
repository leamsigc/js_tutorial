/*jslint es6 */
'use strict';
//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load all event listeners
function loadEventListeners() {
    // DOM Load event
    document.addEventListener('DOMContentLoaded',getTasks);
    //add task event
    form.addEventListener('submit', addTask);
    //Remove task events
    taskList.addEventListener('click', removeTask);
    // clear task
    clearBtn.addEventListener('click', clearAllTasks);
    // Filter tasks
    filter.addEventListener('keyup', filterTasks);
}
//Load all events listener.
loadEventListeners();

//add task
function addTask(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        alert('Please add a task !!...');
        return false;
    }

    // Create li Element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node
    const text = document.createTextNode(taskInput.value);
    // append  text node to it
    li.appendChild(text);
    //create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = `<i class='fa fa-remove'></i>`;
    //append the link to the li
    li.appendChild(link);
    //append the li to the ul
    taskList.appendChild(li);
    // Store task to local storage
    storeTaskToLocalStorage(taskInput.value);
    //Clear input value
    taskInput.value = '';
}
//Remove task Using Event delegation
function removeTask(e) {
    console.log(e.target.className);
    if (e.target.parentElement.classList.contains('delete-item')) {
        //remove the li element
        // e.target.parentElement.parentElement.remove();
        //Confirm if the user one to delete the item
        if (confirm('Are you sure!')) {
            e.target.parentElement.parentElement.remove();
            // Remove Task from Local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
    }
}
// Clear all task from tasks list
function clearAllTasks() {
    //Simple way
    // taskList.innerHTML = '';
    // FASTER MODE
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}
// Filter task    bnm,
function filterTasks(e) {
    //input value 
    const text = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.collection-item');
    listItems.forEach(item => {
        // item.style.display='block';
        let textContent = item.firstChild.textContent.toLowerCase();
        if(textContent.indexOf(text) != -1){
            item.style.color='red'
            item.style.display= 'block';
        }else{
            item.style.display= 'none';
        }
    });
}
// local Store add task
function storeTaskToLocalStorage(value){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(value);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}
// Get task when the dom loaded fot the fist time
function getTasks(){
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    if(allTasks === null ) return;
    console.log(allTasks);
    let html;
    allTasks.forEach(item => {
        const li = document.createElement('li');
        //add class
        li.className = 'collection-item';
        //create text node
        const text = document.createTextNode(item);
        // append  text node to it
        li.appendChild(text);
        //create new link element
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        //add icon html
        link.innerHTML = `<i class='fa fa-remove'></i>`;
        //append the link to the li
        li.appendChild(link);
        //append the li to the ul
        taskList.appendChild(li);
    });
}
// Remove task from the local storage
function removeTaskFromLocalStorage(taskItem){
    const allTasks = JSON.parse(localStorage.getItem('tasks'));
    if(allTasks === null ) return;
    
    allTasks.forEach((item, index) => {
        if(taskItem.textContent === item){
            allTasks.splice(index,1);
        }
    });
    // Reset local storage after remove the task item
    localStorage.setItem('tasks', JSON.stringify(allTasks))
}
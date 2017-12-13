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
    //add task event
    form.addEventListener('submit', addTask);
    //Remove task events
    taskList.addEventListener('click', removeTask);
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
    //Clear input value
    taskInput.value = '';
}
//Remove task Using Event delegation
function removeTask(e){
    if(e.target.className === 'delete-item'){

    }
}
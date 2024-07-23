document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li');
    
    const taskSpan = document.createElement('span');
    taskSpan.innerText = taskText;
    taskItem.appendChild(taskSpan);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X';
    deleteButton.addEventListener('click', () => taskList.removeChild(taskItem));
    taskItem.appendChild(deleteButton);
    
    taskList.appendChild(taskItem);
    
    taskInput.value = '';
  }
}

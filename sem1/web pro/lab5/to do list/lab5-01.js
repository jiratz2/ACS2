document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('add-todo');
    const taskList = document.getElementById('tasklist');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.addEventListener('change', function() {
            taskSpan.classList.toggle('completed');
        });

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const deleteButton = document.createElement('img');
        deleteButton.src = 'remove.png'; 
        deleteButton.alt = 'Delete Task';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);

        
        taskList.appendChild(taskItem);

        taskInput.value = '';
    }

    taskInput.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

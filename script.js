document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Initialize tasks array from Local Storage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to create a task element in the DOM
    function createTaskElement(taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");

        removeBtn.onclick = function () {
            taskList.removeChild(li);            // Remove from DOM
            tasks = tasks.filter(t => t !== taskText); // Remove from array
            localStorage.setItem("tasks", JSON.stringify(tasks)); // Update Local Storage
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Function to render all tasks from Local Storage
    function renderTasks() {
        taskList.innerHTML = ""; // Clear existing tasks
        tasks.forEach(taskText => {
            createTaskElement(taskText);
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        tasks.push(taskText);                   // Add to array
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Save to Local Storage
        createTaskElement(taskText);            // Add to DOM
        taskInput.value = "";                    // Clear input
    }

    // Event listeners
    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Render tasks on page load
    renderTasks();
});
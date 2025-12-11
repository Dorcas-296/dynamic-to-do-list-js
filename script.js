document.addEventListener('DOMContentLoaded', function() {

const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//task function
function addTask() {
    const taskText = taskInput.value.trim();

if (taskText.trim () === "") {
   alert("pleasee enter a task");
   return;
}

//create the li element
   const li = document.createElement("li");
   li.textContent = taskText;

   //create remove button
   const removeBtn = document.createElement("button");
   removeBtn.textContent = "Remove";
   removeBtn.className = "remove-btn";

   //remove task when clicked
   removeBtn.onclick = function() {
    taskList.removeChild(li);
   };

   //Append butoon to li and tasklist
  li.appendChild(removeBtn);
   taskList.appendChild(li);

   taskInput.value = "";
}

addButton.addEventListener("click", addTask);

// When Enter key is pressed inside the input field
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

    document.addEventListener("DOMContentLoaded", function() {
    addTask();
});
});
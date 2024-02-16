function addTask() {
    const taskInput = document.getElementById("task");
    const datetimeInput = document.getElementById("datetime");
  
    const task = taskInput.value.trim();
    const datetime = datetimeInput.value;
  
    if (task === "") {
      alert("Please enter a task.");
      return;
    }
  
    if (datetime === "") {
      alert("Please enter a date and time.");
      return;
    }
  
    const todoList = document.getElementById("todo-list");
  
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <span>${formatDateTime(datetime)}</span>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
  
    todoList.appendChild(li);
  
    // Clear input fields
    taskInput.value = "";
    datetimeInput.value = "";
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  
  function formatDateTime(datetimeString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const datetime = new Date(datetimeString);
    return datetime.toLocaleDateString('en-US', options);
  }
  
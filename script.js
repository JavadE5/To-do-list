document.getElementById("add-btn").addEventListener("click", function () {
  const taskInput = document.getElementById("task-input");
  const taskValue = taskInput.value;

  if (taskValue.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = taskValue;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.className = "complete-btn";
    li.appendChild(completeBtn);

    document.getElementById("task-list").appendChild(li);

    taskInput.value = "";

    completeBtn.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  const tasks = document.querySelectorAll("#task-list li.completed");
  tasks.forEach((task) => task.remove());
});

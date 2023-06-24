fetch("http://localhost:3000/tasks")
.then((response) => response.json())
.then((tasks) => {
  const container = document.getElementById("container");

  tasks.forEach((task) => {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    const taskNameElement = document.createElement("p");
    taskNameElement.textContent = task.task;

    const removeTask = document.createElement("button");
    removeTask.classList.add("icon-cross");

    removeTask.addEventListener("click", () => {
        fetch(`http://localhost:3000/tasks/${task._id}`, {
          method: 'DELETE'
        })
          .then(response => {
            if (response.ok) {
              // Remove the task element from the DOM
              taskElement.remove();
            }
          })
          .catch(error => {
            console.log('Error occurred:', error);
          });
    });

    taskElement.appendChild(taskNameElement);
    taskElement.appendChild(removeTask);
    container.appendChild(taskElement);
  });
})
.catch((error) => {
  console.log("Error occurred:", error);
});

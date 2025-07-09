let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
      const list = document.getElementById("taskList");
      list.innerHTML = "";
      taskList.forEach((task, index) => {
        list.innerHTML += `<li>${task} <button onclick="deleteTask(${index})">X</button></li>`;
      });
      localStorage.setItem("tasks", JSON.stringify(taskList));
    }

    function addTask() {
      const task = document.getElementById("taskInput").value;
      if (task) {
        taskList.push(task);
        renderTasks();
        document.getElementById("taskInput").value = "";
      }
    }

    function deleteTask(index) {
      taskList.splice(index, 1);
      renderTasks();
    }

    renderTasks();
  
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filterDate = document.getElementById("filter-date");

let todos = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = todoInput.value.trim();
  const date = dateInput.value;

  if (task === "" || date === "") {
    alert("Please fill in both task and date!");
    return;
  }

  const todo = { id: Date.now(), task, date };
  todos.push(todo);
  displayTodos(todos);

  form.reset();
});

function displayTodos(list) {
  todoList.innerHTML = "";
  list.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${todo.task} - <small>${todo.date}</small></span>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  displayTodos(todos);
}

filterDate.addEventListener("change", () => {
  const selectedDate = filterDate.value;
  if (selectedDate === "") {
    displayTodos(todos);
  } else {
    const filtered = todos.filter((todo) => todo.date === selectedDate);
    displayTodos(filtered);
  }
});

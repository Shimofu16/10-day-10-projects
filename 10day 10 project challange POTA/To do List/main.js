//selectors
const todoInput = document.querySelector(".todoInput");
const todoBtn = document.querySelector(".todoBtn");
const todoList = document.querySelector(".todoList");

//eventlistener
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteItem);

//functions
function addTodo(event) {
  // prevent  form from submitting
  event.preventDefault();
  //create div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todoItem");
  //append newTodo(li)
  todoDiv.appendChild(newTodo);
  //create check button
  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class="fas fa-check"></i>';
  checkBtn.classList.add("checkBtn");
  todoDiv.appendChild(checkBtn);
  //create delete button
  const delBtn = document.createElement("button");
  delBtn.innerHTML = '<i class="fas fa-trash"></i>';
  delBtn.classList.add("delBtn");
  todoDiv.appendChild(delBtn);
  //append to list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
function deleteItem(e) {
  const itemToDelete = e.target;
  const itemParent = itemToDelete.parentElement;
  if (itemToDelete.classList[0] === "delBtn") {
    itemParent.classList.add("fallAnimation");
    itemParent.addEventListener('transitionend',function(){
        itemParent.remove();
    });
  
  }
  if (itemToDelete.classList[0] === "checkBtn") {
    itemParent.classList.toggle("check");
  }
}

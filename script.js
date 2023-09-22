// function addTask() {
//   const taskInput = document.getElementById("task");
//   const taskText = taskInput.value.trim();

//   if (taskText !== "") {
//     const taskList = document.getElementById("task-list");
//     const li = document.createElement("li");
//     li.innerHTML = `
//       ${taskText}
//       <button onclick="removeTask(this)">Remove</button>
//     `;
//     taskList.appendChild(li);
//     taskInput.value = "";
//   }
// }

// function removeTask(button) {
//   console.log(button.parentElement);
//   const taskList = document.getElementById("task-list");
//   taskList.removeChild(button.parentElement);
// }

//============================================================================================//
function addTask() {
  const inputText = document.getElementById("task").value.trim();
  console.log(inputText);

  if (inputText !== "") {
    const listTasks = document.getElementById("task-list");
    const li = document.createElement("li");
    console.log(li);
    li.innerHTML = `${inputText} <button onclick="removeTask(this)">Remove</button>`;
    console.log(li);
    listTasks.appendChild(li);
  }
}

//============================================================================================//
const allLists = document.getElementsByTagName("li");
console.log(allLists);

function makeRed() {
  console.log("click");

  const title = document.querySelector("h1");
  title.classList.add("title");

  console.log(title);
  for (const li of allLists) {
    li.style.color = `red`;
  }
}

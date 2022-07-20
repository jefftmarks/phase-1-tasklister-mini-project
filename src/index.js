document.addEventListener("DOMContentLoaded", () => {

//grab submit button and add function to create task list  
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  buildTaskList(e.target.new_task_description.value, e.target.severity_selector.value);
  form.reset();
})

//create function to add input value as list item

function buildTaskList(task, importance) {
  const ul = document.querySelector('#tasks');
  const li = document.createElement('li');
  li.textContent = `${ task} `;
  ul.appendChild(li);

  //create and delete button
  const btn = document.createElement('button');
  btn.textContent = 'x';
  li.appendChild(btn);
  btn.addEventListener('click', handleDelete);

  //severity color change
  if (importance === "very_important") {
    li.style.color = "red";
  } else if (importance === "kinda_important") {
    li.style.color = "orange";
  } else {
    li.style.color = "green";
  }

}

//define delete button function
function handleDelete(e) {
  e.target.parentNode.remove();
}


});

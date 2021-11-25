let textBox = document.querySelector('#new-task-description')
let btn = document.querySelectorAll('input')[1]
let formBox = document.querySelector('form')

document.addEventListener("DOMContentLoaded", () => {
  formBox.addEventListener('submit',(e)=>{
    e.preventDefault()
    handleToDo(e.target.new_task_description.value)

    formBox.reset()
  })
});

function handleToDo (todo){
  let li = document.createElement('li')
  li.textContent = todo

  let btn = document.createElement('button')
  btn.textContent = 'del'
  
  btn.addEventListener('click', deleteTask)
  li.appendChild(btn)

  document.querySelector('#tasks').appendChild(li)


}
  

function deleteTask(e){
  e.target.parentNode.remove()
}
//reset()

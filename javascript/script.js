// Task Input Entry 
let task_name = document.getElementById("task-name")
let add_task_btn = document.getElementsByClassName("add-task")[0]
let clear_btn = document.getElementsByClassName("clear")[0]
let u_list = document.getElementsByTagName("ul")[0]

// Event: clear written input text
clear_btn.addEventListener("click", function () {
  task_name.value = ""
})

// ON-CLICK function to add INPUT to the list 
add_task_btn.addEventListener("click", add_task_to_list)

function add_task_to_list () {
  if (task_name.value.trim().length === 0) {
    
    alert("Assign a name for your task!")

  } else {

    // create and display list item
    let new_li = document.createElement("li")
    new_li.innerHTML = task_name.value
    new_li.classList.add("Li") 
    u_list.appendChild(new_li) 

    // create and display delete button
    let delete_btn = document.createElement("button")
    delete_btn.setAttribute("class", "delete")
    delete_btn.innerHTML = "&times"
    new_li.appendChild(delete_btn)

    // create and display edit button
    let edit_btn = document.createElement("button")
    edit_btn.innerText = "edit"
    edit_btn.setAttribute("class", "edit")
    new_li.appendChild(edit_btn)

    // Event: toggle green on li item 
    new_li.addEventListener("click", function () {
      new_li.classList.toggle("green")
    })
    
    // Event: delete list item on delete button 
    delete_btn.addEventListener("click", function() {
      delete_btn.parentElement.style.display="none"
    })

    // Event: edit text on edit button
    edit_btn.addEventListener("click", function (){
      edit_btn.parentElement.removeChild(delete_btn)
      edit_btn.innerHTML = ""      
      task_name.value = edit_btn.parentElement.textContent
      edit_btn.parentElement.style.display = "none"
    } )
    task_name.value = ""
  }
}
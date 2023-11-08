// Task Input Entry 
let task_name = document.getElementById("task-name")
let add_task_btn = document.getElementsByClassName("add-task")[0]
let clear_btn = document.getElementsByClassName("clear")[0]
let u_list = document.getElementsByTagName("ul")[0]
let li_elements = document.getElementsByTagName("li")

// clear written text
clear_btn.addEventListener("click", function () {
  task_name.value = ""
})

// ON-CLICK function to add INPUT to the list 
add_task_btn.addEventListener("click", add_task_to_list)

function add_task_to_list () {
  if (task_name.value.trim().length === 0) {
    
    alert("Assign a name for your task!")

  } else {

    // display list item
    let new_li = document.createElement("li")
    new_li.innerHTML = task_name.value
    new_li.classList.add("Li") 
    u_list.appendChild(new_li) 


    // toggle green on li item 
    new_li.addEventListener("click", function () {
      new_li.classList.toggle("green")
    })
    
    // delete list item on click button 
    let delete_btn = document.createElement("button")
    delete_btn.setAttribute("class", "delete")
    delete_btn.innerHTML = "&times"
    new_li.appendChild(delete_btn)

    delete_btn.addEventListener("click", function() {
      delete_btn.parentElement.style.display="none"
    })
    task_name.value = ""
  }
}
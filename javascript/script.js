// Task Input Entry 
let task_name = document.getElementById("task-name")
let add_task_btn = document.getElementsByClassName("add-task")[0]
let clear_btn = document.getElementsByClassName("clear")[0]
let u_list = document.getElementsByTagName("ul")[0]


// ON-CLICK function to add INPUT to the list 
add_task_btn.addEventListener("click", add_task_to_list)

function add_task_to_list () {
  if (task_name.value.trim().length === 0) {
    alert("Assign a name for your task!")
  } else {
    let new_li = document.createElement("li")
    new_li.innerHTML = task_name.value 
    u_list.appendChild(new_li) 
    
    let new_btn = document.createElement("button")
    new_btn.setAttribute("class", "delete")
    new_btn.innerHTML = "&times"

    new_li.appendChild(new_btn)

    task_name.value = ""
  }
}



// MARK Li TASK AS DONE 
let li_elements = document.getElementsByTagName("li")
for (i= 0; i < li_elements.length; i++) {
  li_elements[i].addEventListener("click", function () {
    li_elements[i].setAttribute("class", "green")
  })
}

// DELETE TASK 
let delete_btn = document.getElementsByClassName("delete")

for (i=0; i < delete_btn.length; i++){
  delete_btn[i].addEventListener("click", function() {
    delete_btn[i].parentElement.style.display="none"
  })
}

// MARK Li TASK AS DONE and Delete when btn clicked

// u_list.addEventListener("click", function(e){
//   console.log(e)
//   if(e.target.tagName ==="li"){
//     e.target.classList.toggle("green")
//   } else if (e.target.tagName === "button") {
//     e.target.parentElement.remove()
//   }
// })


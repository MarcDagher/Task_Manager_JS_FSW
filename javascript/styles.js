// Task Input Entry 
let task_name = document.getElementById("task-name")
let add_task_btn = document.getElementsByClassName("add-task")[0]
let clear_btn = document.getElementsByClassName("clear")[0]
let u_list = document.getElementsByTagName("ul")[0]
let li_elements = document.getElementsByClassName("done") //id should be uniquee to each element
// console.log(li_elements)


// ON-CLICK function to add INPUT to the list 
add_task_btn.addEventListener("click", add_task_to_list)

function add_task_to_list () {
  
  if (task_name.value.trim().length === 0) {
    alert("Assign a name for your task!")
  } else {
    
    let new_list_task = document.createElement("li")
    new_list_task.innerText = task_name.value
    new_list_task.setAttribute("class", "done")
    u_list.appendChild(new_list_task)
    
    new_list_task.innerHTML += `<button class="delete">&times</button>`
    task_name.value = ""
    console.log(new_list_task.parentElement)
  }
}

task_name.addEventListener('change', function (e) {
  console.log(e.target.value)
})



// THIS CODE IS FROM W3SCHOOLS
// let clicks = 0
// let i = 0
for (i=0; i < li_elements.length; i++){
  li_elements[i].addEventListener("click", change_bcolor)
  function change_bcolor () {
    // clicks ++
    // console.log(clicks)
    this.setAttribute("class", "green")
  //   if (clicks %2 == 0){
  //     this.removeAttribute("class", "green")
  //   }else{
  //     this.setAttribute("class", "green")
  //   }
   }
}


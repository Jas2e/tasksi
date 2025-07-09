const inputbox=document.getElementById("input");
const listContainer=document.getElementById("list-container");

function addTask() {
    if(input.value===""){
        alert("Please enter a task.");
    } 
    
    else {
        const li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);

        let span=document.createElement("span");
        span.innerHTML="\u00D7"; // Unicode for multiplication sign (×)
        li.appendChild(span);

    
}
inputbox.value=""; // Clear the input box after adding the task
saveTasks(); // Save tasks to local storage
    
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    }
    else if(e.target.tagName==="SPAN") {
        e.target.parentElement.remove();
        saveTasks(); // Save tasks after removing an item
    }
},false);



function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") ;
   
}

showTasks(); // Call this function to display tasks when the page loads
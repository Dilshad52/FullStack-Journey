let totalTasks = 0;

function updateCounter(){

    document.getElementById("counter").innerHTML =
    "Total Tasks : " + totalTasks;

}

function addTask(){

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if(task === ""){

        alert("Please enter a task.");

        return;

    }

    let li = document.createElement("li");

    let span = document.createElement("span");

    span.innerHTML = task;

    span.onclick = function(){

        span.classList.toggle("completed");

    };

    let deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete";

    deleteButton.className = "deleteBtn";

    deleteButton.onclick = function(){

        li.remove();

        totalTasks--;

        updateCounter();

    };

    li.appendChild(span);

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    totalTasks++;

    updateCounter();

    input.value = "";

    input.focus();

}

document.getElementById("taskInput").addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        addTask();

    }

});
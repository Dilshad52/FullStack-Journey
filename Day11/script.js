function addTask(){

    let task = document.getElementById("taskInput").value;

    if(task === ""){

        alert("Please enter a task.");

        return;

    }

    let list = document.getElementById("taskList");

    list.innerHTML += "<li>" + task + "</li>";

    document.getElementById("taskInput").value = "";

}
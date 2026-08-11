let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function saveStudents(){

    localStorage.setItem("students",JSON.stringify(students));

}

function addStudent(){

    let name=document.getElementById("name").value.trim();

    let age=document.getElementById("age").value.trim();

    let course=document.getElementById("course").value.trim();

    if(name==="" || age==="" || course===""){

        alert("Please fill all fields.");

        return;

    }

    students.push({

        name:name,

        age:age,

        course:course

    });

    saveStudents();

    displayStudents();

    document.getElementById("name").value="";

    document.getElementById("age").value="";

    document.getElementById("course").value="";

}

function displayStudents(){

    let table=document.getElementById("studentTable");

    table.innerHTML="";

    students.forEach(function(student,index){

        table.innerHTML +=`

        <tr>

        <td>${student.name}</td>

        <td>${student.age}</td>

        <td>${student.course}</td>

        <td>

        <button class="deleteBtn"

        onclick="deleteStudent(${index})">

        Delete

        </button>

        </td>

        </tr>

        `;

    });

}

function deleteStudent(index){

    students.splice(index,1);

    saveStudents();

    displayStudents();

}
let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

function addStudent() {

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let course = document.getElementById("course").value.trim();

    if(name==="" || age==="" || course===""){

        alert("Please fill all fields.");

        return;

    }

    students.push({
        name,
        age,
        course
    });

    saveStudents();

    displayStudents();

    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("course").value="";

}

function displayStudents(list = students){

    let table=document.getElementById("studentTable");

    table.innerHTML="";

    document.getElementById("count").innerHTML =
    "Total Students : " + list.length;

    list.forEach((student,index)=>{

        table.innerHTML +=`

        <tr>

        <td>${student.name}</td>

        <td>${student.age}</td>

        <td>${student.course}</td>

        <td>

        <button class="editBtn"
        onclick="editStudent(${students.indexOf(student)})">

        Edit

        </button>

        <button class="deleteBtn"
        onclick="deleteStudent(${students.indexOf(student)})">

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

function editStudent(index){

    let newName=prompt("Student Name",students[index].name);

    let newAge=prompt("Age",students[index].age);

    let newCourse=prompt("Course",students[index].course);

    if(newName && newAge && newCourse){

        students[index].name=newName;
        students[index].age=newAge;
        students[index].course=newCourse;

        saveStudents();

        displayStudents();

    }

}

function searchStudent(){

    let keyword=document.getElementById("search").value.toLowerCase();

    let filtered=students.filter(student=>

        student.name.toLowerCase().includes(keyword) ||

        student.course.toLowerCase().includes(keyword)

    );

    displayStudents(filtered);

}

function exportCSV(){

    let csv="Name,Age,Course\n";

    students.forEach(student=>{

        csv += `${student.name},${student.age},${student.course}\n`;

    });

    let blob=new Blob([csv],{type:"text/csv"});

    let link=document.createElement("a");

    link.href=URL.createObjectURL(blob);

    link.download="students.csv";

    link.click();

}
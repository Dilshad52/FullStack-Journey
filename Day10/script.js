let students = ["Rahul", "Priya", "Aman", "Sara"];

let marks = [85, 92, 78, 95];

function showStudents() {

    console.clear();

    console.log("Student List");

    for(let i = 0; i < students.length; i++) {

        console.log((i + 1) + ". " + students[i]);

    }

}

function showMarks() {

    console.clear();

    console.log("Student Marks");

    for(let i = 0; i < marks.length; i++) {

        console.log(students[i] + " : " + marks[i]);

    }

}

function addStudent() {

    let newStudent = prompt("Enter Student Name");

    students.push(newStudent);

    console.clear();

    console.log("Updated Student List");

    for(let i = 0; i < students.length; i++) {

        console.log(students[i]);

    }

    alert("Student Added Successfully!");

}
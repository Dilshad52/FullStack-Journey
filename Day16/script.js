let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function saveNotes(){

    localStorage.setItem("notes", JSON.stringify(notes));

}

function addNote(){

    let input = document.getElementById("noteInput");

    let text = input.value.trim();

    if(text === ""){

        alert("Please write something.");

        return;

    }

    notes.push({

        content:text

    });

    saveNotes();

    displayNotes();

    input.value="";

}

function displayNotes(){

    let container = document.getElementById("notesContainer");

    container.innerHTML="";

    for(let i=0;i<notes.length;i++){

        container.innerHTML += `

        <div class="note">

            <p>${notes[i].content}</p>

        </div>

        `;

    }

}
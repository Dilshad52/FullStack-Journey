let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {

    let input = document.getElementById("noteInput");

    let text = input.value.trim();

    if(text===""){
        alert("Please write a note.");
        return;
    }

    notes.push({
        content:text,
        pinned:false
    });

    saveNotes();

    displayNotes();

    input.value="";

}

function displayNotes(list = notes){

    let container=document.getElementById("notesContainer");

    container.innerHTML="";

    list.sort((a,b)=>b.pinned-a.pinned);

    list.forEach((note,index)=>{

        container.innerHTML += `

        <div class="note ${note.pinned ? 'pinned' : ''}">

            <p>${note.content}</p>

            <div class="actions">

                <button class="pinBtn"
                onclick="togglePin(${notes.indexOf(note)})">

                ${note.pinned ? "Unpin":"Pin"}

                </button>

                <button class="editBtn"
                onclick="editNote(${notes.indexOf(note)})">

                Edit

                </button>

                <button class="deleteBtn"
                onclick="deleteNote(${notes.indexOf(note)})">

                Delete

                </button>

            </div>

        </div>

        `;

    });

}

function deleteNote(index){

    notes.splice(index,1);

    saveNotes();

    displayNotes();

}

function editNote(index){

    let updated=prompt("Edit Note",notes[index].content);

    if(updated!==null && updated.trim()!==""){

        notes[index].content=updated;

        saveNotes();

        displayNotes();

    }

}

function togglePin(index){

    notes[index].pinned=!notes[index].pinned;

    saveNotes();

    displayNotes();

}

function searchNotes(){

    let keyword=document.getElementById("search").value.toLowerCase();

    let filtered=notes.filter(note=>

        note.content.toLowerCase().includes(keyword)

    );

    displayNotes(filtered);

}
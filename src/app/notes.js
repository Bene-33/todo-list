import { createNoteList

} from "./programm.js";

const defaultNotesList = createNoteList("defaultNotes");

const loadNotes = () => {
    const content = document.getElementById("content");
    content.innerHTML =`
    <div class = "contentHeader">
        <div>
            Notes<button class = "addTaskNoteProject" id= "addNote">+</button>  
        </div>
        <ul id ="notesContainer" class = "taskNotesProjectLists"></ul>
    </div>
    <dialog class="addNewTaskProjectNoteDialog">
        <button class ="closeDialogButton">X</button>
        <p>Note</p>
        <form>
            <label for="content"></label>
            <input type="text" class="content" id="noteContent" name="content" value="" placeholder="my note" required><br>
            <button class= "submitDialogButton" id="submitNote" type="submit" >+</button>
        </form>
    </dialog>   
    `;
    const noteListContainer = document.getElementById("notesContainer");
    defaultNotesList.noteList.forEach(note => {
        const li = document.createElement("li");
        li.className = "noteListItem";
        li.textContent = note.content;
        noteListContainer.appendChild(li);
    });
};

export {
    loadNotes,
    defaultNotesList
};
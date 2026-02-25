const loadNotes = () => {
    const content = document.getElementById("content");
    content.innerHTML =`
    <div class = "contentHeader">
        <div>
            Notes<button class = "addTaskNoteProject" id = "addNote">+</button>  
        </div>
        <div class = "taskNotesProjectLists"></div>
    </div>
    <dialog id="addNewTaskProjectNoteDialog">
        <button class ="closeDialogButton">X</button>
        <p>Note</p>
        <form>
            <label for="content"></label>
            <input type="text" class="content" name="content" value="" placeholder="my note" required><br>
            <button type="submit">Add</button>
        </form>
    </dialog>   
    `;
};



export {
    loadNotes
};
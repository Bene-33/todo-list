const loadNotes = () => {
    const content = document.getElementById("content");
    content.innerHTML =`
    <div class = "contentHeader">
        <div>
            Notes<button class = "addTaskNoteProject" id = "addNote">+</button>  
        </div>
        <div class = "taskNotesProjectLists"></div>
    </div>   
    `;
};



export {loadNotes};
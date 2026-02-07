export const loadNotes = () => {
    const content = document.getElementById("content");
    content.innerHTML =`
        <div id = "notes">Notes</div>
        <button id = "addTaskNoteProject" >+</button>
    `
};
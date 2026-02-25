import {loadNotes} from "./notes";
import {loadQuestlog} from "./questlog";

let isShowingQuestlog = true;
function switchProjectsNotes(){
     if(isShowingQuestlog){
        const currentContent = loadNotes();
        isShowingQuestlog = false;
        return{
            currentContent
        };
    } else {
        const currentContent = loadQuestlog();
        isShowingQuestlog = true;
        return{
            currentContent
        };
    };
};

function openAddTaskNoteProjectDialog(){
    const dialog = document.getElementById("addNewTaskProjectNoteDialog");
    dialog.showModal();
};

export{
    switchProjectsNotes,
    openAddTaskNoteProjectDialog
};
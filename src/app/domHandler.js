import {loadNotes} from "./notes";

import {loadQuestlog} from "./questlog";

import {
    createNote,
    createNoteList
} from "./programm";

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
    const dialog = document.querySelector(".addNewTaskProjectNoteDialog");
    dialog.showModal();
};

function closeAddTaskNoteProjectDialog(){
    const dialog = document.querySelector(".addNewTaskProjectNoteDialog");
    dialog.close();
};

//function submitNewTask
//function SubmitNewProject 
//////////////////////////////////////////// continue here 
 function submitNewNote(){
     document.getElementById("submitNote").onclick = (e) =>{
        e.preventDefault();
         const noteContent = document.getElementById("noteContent").value;
         defaultNoteList.noteList.push(createNote(noteContent));
         closeAddTaskNoteProjectDialog();
     };
 };

//function storeLocalData(){}
//function loadLocalData(){} 
//function deleteLocalData(){}

//function deleteNote(){}
//function deleteTask(){}
//function deleteProject(){}


export{
    switchProjectsNotes,
    openAddTaskNoteProjectDialog,
    closeAddTaskNoteProjectDialog,
    submitNewNote
};
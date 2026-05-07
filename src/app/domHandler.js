import {
    loadNotes,
    defaultNotesList
} from "./notes";

import {loadQuestlog} from "./questlog";

import {
    createNote,
    createNoteList,
    storeLocalData,
} from "./programm";

let isShowingQuestlog = true;
function switchProjectsNotes(){
     if(isShowingQuestlog){
        loadNotes();
        isShowingQuestlog = false;
    } else {
        const currentContent = loadQuestlog();
        isShowingQuestlog = true;
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
 function submitNewNote(e){
    e.preventDefault();
    const noteContent = document.getElementById("noteContent").value;
    defaultNotesList.noteList.push(createNote(noteContent));
    storeLocalData("noteList", defaultNotesList.noteList);
    closeAddTaskNoteProjectDialog();
     
 };

//function storeLocalData(){} localstorage.setitem("key", JSON.stringify(data));
//function loadLocalData(){} local.storgage.getItem("key") and JSON.parse() 
//function deleteLocalData(){} localstorage.removeItem("key") or localstorage.clear() for all data  

//function deleteNote(){}
//function deleteTask(){}
//function deleteProject(){}


export{
    switchProjectsNotes,
    openAddTaskNoteProjectDialog,
    closeAddTaskNoteProjectDialog,
    submitNewNote
};
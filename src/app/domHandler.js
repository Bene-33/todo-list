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
 function submitNewNote(e){
    e.preventDefault();
    const noteContent = document.getElementById("noteContent").value;
    defaultNotesList.noteList.push(createNote(noteContent));
    storeLocalData("noteList", defaultNotesList.noteList);
    closeAddTaskNoteProjectDialog();
    loadNotes();
 };

function deleteNote(e){
    return console.log("delete note");
};
//function deleteTask(){}
//function deleteProject(){}


export{
    switchProjectsNotes,
    openAddTaskNoteProjectDialog,
    closeAddTaskNoteProjectDialog,
    submitNewNote,
    deleteNote
};
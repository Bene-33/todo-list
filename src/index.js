import './style.css';

import {
    loadQuestlog,
    setActiveQuest
} from './app/questlog.js';

import {
    switchProjectsNotes, 
    openDialog,
    submitNewNote,
    deleteNote,
    submitNewTask,
    deleteTask,
    submitNewQuest,
    deleteQuest,
    openEditTaskDialog
} from './app/domHandler.js';

loadQuestlog();

document.getElementById("switchProjectsNotes").addEventListener("click", switchProjectsNotes);

document.getElementById("content").addEventListener("click", (e) => {
    if (e.target.id === "addTask"){
        const dialog  = document.querySelector(".addNewTaskProjectNoteDialog");
        delete dialog.dataset.openEditTaskId;
        dialog.querySelector("form").reset();
        openDialog(".addNewTaskProjectNoteDialog");
    }    
    else if (e.target.id === "addQuest") openDialog(".addNewQuestDialog");
    else if (e.target.id === "addNote")    openDialog(".addNewTaskProjectNoteDialog");   // siehe unten
});

document.getElementById("content").addEventListener("click", (e) => {
    if(e.target.classList.contains("closeDialogButton"))
        e.target.closest("dialog").close();
});


document.getElementById("content").addEventListener("click", (e) => {
    if (e.target.id === "submitNote") submitNewNote(e);
    else if (e.target.id === "submitTask") submitNewTask(e);
    else if (e.target.id === "submitQuest") submitNewQuest(e);
});

document.getElementById("content").addEventListener("click", (e) =>{
    if(e.target.classList.contains("deleteNoteButton")) deleteNote(e);
    else if (e.target.classList.contains("deleteTaskButton")) deleteTask(e);
    else if (e.target.classList.contains("deleteQuestButton")) deleteQuest(e);
});

document.getElementById("content").addEventListener("click", (e) => {
    if(e.target.classList.contains("expandTaskButton")){
        const li = e.target.closest("li");
        const isOpen = li.querySelector(".taskHidden").classList.contains("expanded");
        li.querySelector(".taskHidden").classList.toggle("expanded")
        if(isOpen) {e.target.textContent = ">"}
        else    {e.target.textContent = "v"};
    }
});

document.getElementById("content").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") return;       
    const questLi = e.target.closest(".questItem");
    if (!questLi) return;                            
    setActiveQuest(questLi.dataset.questId);
    loadQuestlog();
});

document.getElementById("content").addEventListener("click", (e) => {
    if(e.target.classList.contains("editTaskButton")){
        openEditTaskDialog(e);
    }
});
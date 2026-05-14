import './style.css';

import {
    loadQuestlog
} from './app/questlog.js';

import {
    switchProjectsNotes, 
    openAddTaskNoteProjectDialog, 
    closeAddTaskNoteProjectDialog,
    submitNewNote,
    deleteNote,
    submitNewTask,
    deleteTask
} from './app/domHandler.js';

loadQuestlog();

document.getElementById("switchProjectsNotes").addEventListener("click", switchProjectsNotes);

document.getElementById("content").addEventListener("click", (e) => {
    if(e.target.classList.contains("addTaskNoteProject"))
        openAddTaskNoteProjectDialog();
});

document.getElementById("content").addEventListener("click", (e) => {
    if(e.target.classList.contains("closeDialogButton"))
        closeAddTaskNoteProjectDialog();
});

document.getElementById("content").addEventListener("click", (e) => {
    if (e.target.id === "submitNote") submitNewNote(e)
        else if (e.target.id === "submitTask") submitNewTask(e);
});

document.getElementById("content").addEventListener("click", (e) =>{
    if(e.target.classList.contains("deleteNoteButton"))
        deleteNote(e);
});

document.getElementById("content").addEventListener("click", (e) => {
    if (e.target.id === "submitTask") submitNewTask(e);
});

document.getElementById("content").addEventListener("click", (e) =>{
    if(e.target.classList.contains("deleteTaskButton"))
        deleteTask(e);
});

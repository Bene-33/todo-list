import './style.css';

import {
    loadQuestlog
} from './app/questlog.js';
////////// could it be transfered to domHandler.js?
import {
    createTask, 
    createNote, 
    createTodolist,
    createNoteList
} from './app/programm.js';
//////////////
import {
    switchProjectsNotes, 
    openAddTaskNoteProjectDialog, 
    closeAddTaskNoteProjectDialog,
    submitNewNote,
    deleteNote
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
    if(e.target.classList.contains("submitDialogButton"))
        submitNewNote(e);
});

document.getElementById("content").addEventListener("click", (e) =>{
    if(e.target.classList.contains("deleteTaskNoteProjectButton"))
        deleteNote(e);
})

//tmp usage of functions
const defaultTodoList = createTodolist("defaultTodos");

defaultTodoList.taskList.push(createTask("task1", "description1", "2024-06-30", "high", "notes1", "checklist1", "status1", "project1"));
defaultTodoList.taskList.push(createTask("task2", "description2", "2024-07-15", "medium", "notes2", "checklist2", "status2", "project2"));

console.log(defaultTodoList);
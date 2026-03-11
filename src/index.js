import './style.css';

import {
    loadQuestlog
} from './dom/questlog.js';
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
    submitNewNote
} from './dom/domHandler.js';

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

//tmp usage of functions
const defaultTodoList = createTodolist("defaultTodos");
const defaultNoteList = createNoteList("defaultNotes");

defaultTodoList.taskList.push(createTask("task1", "description1", "2024-06-30", "high", "notes1", "checklist1", "status1", "project1"));
defaultTodoList.taskList.push(createTask("task2", "description2", "2024-07-15", "medium", "notes2", "checklist2", "status2", "project2"));
defaultNoteList.noteList.push(createNote("note1"));

console.log(defaultTodoList);
console.log(defaultNoteList);
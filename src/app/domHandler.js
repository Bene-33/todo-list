import {
    loadNotes,
    defaultNotesList
} from "./notes";

import {
    loadQuestlog,
    defaultTaskList
} from "./questlog";

import {
    createNote,
    createNoteList,
    storeLocalData,
    createTask,
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

function submitNewNote(e){
    e.preventDefault();
    const noteContent = document.getElementById("noteContent").value;
    defaultNotesList.noteList.push(createNote(noteContent));
    storeLocalData("noteList", defaultNotesList.noteList);
    closeAddTaskNoteProjectDialog();
    loadNotes();
};

function deleteNote(e){
    const noteID = e.target.closest("li").dataset.noteId;
    const arrayIndex = defaultNotesList.noteList.findIndex(note => note.id === noteID);
    defaultNotesList.noteList.splice(arrayIndex, 1);
    storeLocalData("noteList", defaultNotesList.noteList);
    loadNotes();
};

function submitNewTask(e){
    e.preventDefault();
    const taskTitle = document.getElementById("taskTitle").value;
    const taskContent = document.getElementById("taskContent").value;
    const taskDueDate = document.getElementById("taskDueDate").value;
    const taskPriority = document.getElementById("taskPriority").value;
    const taskStatus = document.getElementById("taskStatus").value;
    defaultTaskList.taskList.push(createTask(taskTitle, taskContent, taskDueDate, taskPriority, taskStatus));
    storeLocalData("taskList", defaultTaskList.taskList);
    closeAddTaskNoteProjectDialog();
    loadQuestlog();
};

function deleteTask(e){
    const taskID = e.target.closest("li").dataset.taskId;
    const arrayIndex = defaultTaskList.taskList.findIndex(task => task.id === taskID);
    defaultTaskList.taskList.splice(arrayIndex, 1);
    storeLocalData("taskList", defaultTaskList.taskList);
    loadQuestlog();
};

function submitNewQuest(e){
    e.preventDefault();
    const quest = document.getElementById("quest").value;
    storeLocalData("taskList", defaultTaskList.taskList);
    closeAddTaskNoteProjectDialog();
    loadQuestlog();
};

function deleteProject(){
};

export{
    switchProjectsNotes,
    openAddTaskNoteProjectDialog,
    closeAddTaskNoteProjectDialog,
    submitNewNote,
    deleteNote,
    submitNewTask,
    deleteTask,
    submitNewQuest,
    deleteProject
};
import {
    loadNotes,
    defaultNotesList
} from "./notes";

import {
    loadQuestlog,
    getActiveQuest,
    saveQuests,
    addQuest,
    deleteQuest as deleteQuestFromList,
    updateTask
} from "./questlog";

import {
    createNote,
    createNoteList,
    storeLocalData,
    createTask
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

function openDialog(selector){
    const dialog = document.querySelector(selector);
    dialog.showModal();
};

function submitNewNote(e){
    e.preventDefault();
    const noteContent = document.getElementById("noteContent").value;
    defaultNotesList.noteList.push(createNote(noteContent));
    storeLocalData("noteList", defaultNotesList.noteList);
    e.target.closest("dialog").close();
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
    const editDialog = e.target.closest("dialog");
    const editTaskId = editDialog.dataset.editTaskId;
    const body = {
        title: document.getElementById("taskTitle").value,
        content: document.getElementById("taskContent").value,
        dueDate: document.getElementById("taskDueDate").value,
        priority: document.getElementById("taskPriority").value,
        status: document.getElementById("taskStatus").value
    }
    if(editTaskId){
        updateTask(editTaskId, body);
        delete editDialog.dataset.editTaskId;
    } else {
        getActiveQuest().taskList.push(createTask(body.title, body.content, body.dueDate, body.priority, body.status));
        saveQuests();
    }
    e.target.closest("dialog").close();
    loadQuestlog();
};

function deleteTask(e){
    const taskID = e.target.closest("li").dataset.taskId;
    const arrayIndex = getActiveQuest().taskList.findIndex(task => task.id === taskID);
    getActiveQuest().taskList.splice(arrayIndex, 1);
    saveQuests();
    loadQuestlog();
};

function submitNewQuest(e){
    e.preventDefault();
    const questName = document.getElementById("quest").value;
    addQuest(questName);
    e.target.closest("dialog").close();
    loadQuestlog();
};

function deleteQuest(e){
    const questID = e.target.closest("li").dataset.questId;
    deleteQuestFromList(questID);
    saveQuests();
    loadQuestlog();
};

function openEditTaskDialog(e){
    const taskID = e.target.closest("li").dataset.taskId;
    const task = getActiveQuest().taskList.find(task => task.id === taskID);
    document.getElementById("taskTitle").value = task.title;
    document.getElementById("taskContent").value = task.content;
    document.getElementById("taskDueDate").value = task.dueDate;
    document.getElementById("taskPriority").value = task.priority;
    document.getElementById("taskStatus").value = task.status;
    const dialog = document.querySelector(".addNewTaskProjectNoteDialog");
    dialog.dataset.editTaskId = taskID;
    openDialog(".addNewTaskProjectNoteDialog");
}

export{
    switchProjectsNotes,
    openDialog,
    submitNewNote,
    deleteNote,
    submitNewTask,
    deleteTask,
    submitNewQuest,
    deleteQuest,
    openEditTaskDialog
};
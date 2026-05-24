import{v4 as uuidv4} from 'uuid';

function createQuest(name){
    const id = uuidv4();
    return {
        id,
        name,
        taskList:[]
    };
};

function createTask(title, content, dueDate, priority, status){
    const id = uuidv4();
    return {
        title, 
        content, 
        dueDate, 
        priority,
        status,
        id
    };
};

function createNoteList(name){
    const id = uuidv4();
    return {
        id,
        name,
        noteList:[]
    };
};

function createNote(content){
    const id = uuidv4();
    return {
        id,
        content
    };  
};

function storeLocalData(key, data){
        localStorage.setItem(key, JSON.stringify(data));
};

function loadLocalData(key, fallback = null){
    const data = localStorage.getItem(key);
    if(data) return JSON.parse(data);
    return fallback;
};

function deleteLocalData(key){
    localStorage.removeItem(key);
};

function deleteAllLocalData(){
    localStorage.clear();
};

export {
    createQuest, 
    createTask,
    createNoteList, 
    createNote,
    storeLocalData,
    loadLocalData,
    deleteLocalData,
    deleteAllLocalData
};
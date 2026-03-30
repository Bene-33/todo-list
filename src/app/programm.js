import{v4 as uuidv4} from 'uuid';

function createTodolist(name){
    const id = uuidv4();
    return {
        id,
        name,
        taskList:[]
    };
};

function createTask(title, content, dueDate, priority, notes, checklist, status){
    const id = uuidv4();
    return {
        title, 
        content, 
        dueDate, 
        priority, 
        notes, 
        checklist, 
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

export {
    createTodolist, 
    createTask,
    createNoteList, 
    createNote
};
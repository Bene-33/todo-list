import{v4 as uuidv4} from 'uuid';

function createTodolist(name){
    const id = uuidv4();
    return {
        id,
        name,
        taskList:[]
    };
};

function createTask(title, description, dueDate, priority, notes, checklist, status){
    const id = uuidv4();
    return {
        title, 
        description, 
        dueDate, 
        priority, 
        notes, 
        checklist, 
        status,
        id
    };
};

function createNote(){
    const id = uuidv4();
    return {
        id,
        content: ""
    };  
};


export {createTodolist, createTask, createNote};
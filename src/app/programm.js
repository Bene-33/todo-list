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

function createNote(){
    const id = uuidv4();
    return {
        id,
        content: ""
    };  
};

// function createProject(){}



//function closeAddTaskNoteProjectDialog(){}
//function submitNewTaskProjectNote(){}

export {
    createTodolist, 
    createTask, 
    createNote
};
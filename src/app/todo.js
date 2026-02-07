import{v4 as uuidv4} from 'uuid';

function todolist(name){
    const id = uuidv4();
    return {
        id,
        name,
        taskList:[]
    };
};

function task(title, description, dueDate, priority, notes, checklist, status){
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


export default task;
export {todolist};
function todolist(name){
    return {
        name,
        taskList:[]
    };
};

function task(title, description, dueDate, priority, notes, checklist, status){


    return {
        title, 
        description, 
        dueDate, 
        priority, 
        notes, 
        checklist, 
        status
    };
};


export default task;
export {todolist};
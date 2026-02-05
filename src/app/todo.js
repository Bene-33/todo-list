//const todolists = {default: []};
// default todo list + todo Lists variable machen

function todolists(name){
    return {
        name,
        taskList:[]
    };
};

function task(title, description, dueDate, priority, notes, checklist, status, project){

    return {
        title, 
        description, 
        dueDate, 
        priority, 
        notes, 
        checklist, 
        status, 
        project
    };
}

export default task;
export {todolists};
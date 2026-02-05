import task, {todolists} from './app/todo.js';


const defaultList = todolists("default");

defaultList.taskList.push(task("task1", "description1", "2024-06-30", "high", "notes1", "checklist1", "status1", "project1"));
defaultList.taskList.push(task("task2", "description2", "2024-07-15", "medium", "notes2", "checklist2", "status2", "project2"));
console.log(defaultList);
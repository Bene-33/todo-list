import './style.css';
import {createTask, createNote, createTodolist} from './app/programm.js';
import  {switchButton} from './dom/switchProjectNotes.js';
import { loadQuestlog } from './dom/questlog.js';

loadQuestlog();

const defaultList = createTodolist("default");

defaultList.taskList.push(createTask("task1", "description1", "2024-06-30", "high", "notes1", "checklist1", "status1", "project1"));
defaultList.taskList.push(createTask("task2", "description2", "2024-07-15", "medium", "notes2", "checklist2", "status2", "project2"));
console.log(defaultList);
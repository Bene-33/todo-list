import { 
    createTasklist,
    loadLocalData
} from "./programm.js";

const defaultTaskList = createTasklist("defaultTasks");

defaultTaskList.taskList = loadLocalData("taskList", []);

const loadQuestlog = () => {
    const content = document.getElementById("content");
    content.innerHTML =
    `<div id = "questlogContent">
            <div id = "sidebar">
                <div class = "contentHeader">
                    Questlog<button class = "addTaskNoteProject" id = "addProject">+</button>
                </div>
                <div class = "taskNotesProjectLists"></div>
                <ul id ="projectContainer" class = "taskNotesProjectLists"></ul>
            </div>
            <div id = "main">
                <div class = "contentHeader">
                    Tasks<button class = "addTaskNoteProject" id = "addTask">+</button>
                </div>
                <div class = "taskNotesProjectLists"></div>
                <ul id ="taskContainer" class = "taskNotesProjectLists"></ul>
            </div>
    </div>
    <dialog class="addNewTaskProjectNoteDialog">
        <button class ="closeDialogButton">X</button>
        <p>Task</p>
        <form>
            <label for="content"></label>
            <input type="text" class="content" id="taskContent" name="content" value="" placeholder="my task" required><br>
            <button class= "submitDialogButton" id="submitTask" type="submit" >+</button>
        </form>
    </dialog>
    <dialog class="addNewTaskProjectNoteDialog">
    <button class ="closeDialogButton">X</button>
    <p>Quest</p>
    <form>
        <label for="content"></label>
        <input type="text" class="content" id="taskContent" name="content" value="" placeholder="my task" required><br>
        <button class= "submitDialogButton" id="submitTask" type="submit" >+</button>
    </form>
    </dialog>
    `;
     const taskListContainer = document.getElementById("taskContainer");
        defaultTaskList.taskList.forEach(task => {
            const string = document.createTextNode(task.content);
            const deleteButton = document.createElement("button");
            deleteButton.className = "deleteTaskNoteProjectButton deleteTaskButton";
            deleteButton.textContent = "X";
            const li = document.createElement("li");
            li.className = "taskListItem";
            li.dataset.taskId = task.id;
            li.append(string, deleteButton);
            taskListContainer.appendChild(li);
        });
};

export {
    loadQuestlog,
    defaultTaskList
};
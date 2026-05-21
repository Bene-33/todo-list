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
                <ul id ="projectContainer" class = "taskNotesProjectLists"></ul>
            </div>
            <div id = "main">
                <div class = "contentHeader">
                    Tasks<button class = "addTaskNoteProject" id = "addTask">+</button>
                </div>
                <ul id ="taskContainer" class = "taskNotesProjectLists"></ul>
            </div>
    </div>
    <dialog class="addNewTaskProjectNoteDialog">
        <button class ="closeDialogButton">X</button>
        <p>Task</p>
        <form>
            <input type="text" class="content" id="taskTitle" name="title" value="" placeholder="Title" required><br>
            <textarea class="content" id="taskContent" placeholder="content"></textarea><br>
            <label class = "formSubLabel" for="taskDueDate">Due Date</label><br>
            <input type="date" class="content" id="taskDueDate" name="dueDate" value="" placeholder="due date"><br>
            <label class = "formSubLabel"for="taskPriority">Priority</label><br>
            <select class="content" id="taskPriority" name="priority">
                <option value="1">1</option>
                <option value="2" selected>2</option>
                <option value="3">3</option>
            </select><br>
            <label class = "formSubLabel"for="taskStatus">Status</label><br>
            <select class="content" id="taskStatus" name="status">
                <option value="backlog" selected>backlog</option>
                <option value="active">active</option>
                <option value="closed">closed</option>
            </select><br>
            <button class= "submitDialogButton" id="submitTask" type="submit" >+</button>
        </form>
    </dialog>
    <dialog class="addNewTaskProjectNoteDialog">
        <button class ="closeDialogButton">X</button>
        <p>Quest</p>
    <form>
        <label for="content"></label>
        <input type="text" class="content" id="quest" name="title" value="" placeholder="Quest" required><br>
        <button class= "submitDialogButton" id="submitQuest" type="submit" >+</button>
    </form>
    </dialog>
    `;
     const taskListContainer = document.getElementById("taskContainer");
        defaultTaskList.taskList.forEach(task => {
            const taskTitle = document.createTextNode(task.title);
            const taskContent = document.createTextNode(task.content);
            const taskDueDate = document.createTextNode(task.dueDate);
            const taskPriority = document.createTextNode(task.priority);
            const taskStatus = document.createTextNode(task.status);

            const taskHeaderContainer = document.createElement("span");
            taskHeaderContainer.className = "taskHeader";
            taskHeaderContainer.append(taskTitle, document.createElement("br"), "Due Date: ", taskDueDate,);
            
            
            const taskContentContainer = document.createElement("span");
            taskContentContainer.className = "taskContent";
            taskContentContainer.append(taskContent);

            const taskDueDateContainer = document.createElement("span");
            taskDueDateContainer.className = "taskDueDate";

            
            const taskPriorityContainer = document.createElement("span");
            taskPriorityContainer.className = "taskPriority";
            taskPriorityContainer.append("Prio: ", taskPriority);
            
            const taskStatusContainer = document.createElement("span");
            taskStatusContainer.className = "taskStatus";
            taskStatusContainer.append("Status: ", taskStatus);
            
            const taskBodyContainer = document.createElement("div");
            taskBodyContainer.className = "taskBody";
            taskBodyContainer.append(taskDueDateContainer, taskPriorityContainer, taskStatusContainer);
            
            const deleteButton = document.createElement("button");
            deleteButton.className = "deleteTaskNoteProjectButton deleteTaskButton";
            deleteButton.textContent = "X";
            
            const expandButton = document.createElement("button");
            expandButton.className = "expandTaskButton";
            expandButton.textContent = ">";
            
            const taskHiddenContainer = document.createElement("span");
            taskHiddenContainer.className = "taskHidden";
            taskHiddenContainer.append(taskContentContainer, taskBodyContainer, deleteButton);


            const li = document.createElement("li");
            li.className = "taskListItem";
            li.dataset.taskId = task.id;
            li.append(taskHeaderContainer, expandButton, taskHiddenContainer);
            taskListContainer.appendChild(li);
        });
};

export {
    loadQuestlog,
    defaultTaskList
};
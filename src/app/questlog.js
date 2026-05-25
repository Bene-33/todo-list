import { 
    createQuest,
    loadLocalData,
    storeLocalData
} from "./programm.js";

const defaultQuest = createQuest("Hub");
let quests = loadLocalData("quests", [defaultQuest]);
let activeQuestId = loadLocalData("activeQuestId", defaultQuest.id); 

const loadQuestlog = () => {
    const content = document.getElementById("content");
    content.innerHTML =
    `<div id = "questlogContent">
            <div id = "sidebar">
                <div class = "contentHeader">
                    Questlog<button class = "addTaskNoteProject" id = "addQuest">+</button>
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
    <dialog class="addNewTaskProjectNoteDialog" id ="addNewTaskDialog">
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
    <dialog class="addNewQuestDialog addNewTaskProjectNoteDialog">
        <button class ="closeDialogButton">X</button>
        <p>Quest</p>
    <form>
        <label for="content"></label>
        <input type="text" class="content" id="quest" name="title" value="" placeholder="Quest" required><br>
        <button class= "submitDialogButton" id="submitQuest" type="submit" >+</button>
    </form>
    </dialog>
    `;

    const questListContainer = document.getElementById("projectContainer");
    quests.forEach(quest => {
        const questName = document.createTextNode(quest.name);

        const deleteButton = document.createElement("button");
        deleteButton.className = "deleteTaskNoteProjectButton deleteQuestButton";
        deleteButton.textContent = "X";

        const li = document.createElement("li");
        li.className = "questItem";
        li.dataset.questId = quest.id;
        if (quest.id === activeQuestId){
            li.classList.add("activeQuest");
        }
        li.append(questName, deleteButton);
        questListContainer.appendChild(li);
    });

    const taskListContainer = document.getElementById("taskContainer");
    getActiveQuest().taskList.forEach(task => {
        const taskTitle = document.createTextNode(task.title);
        const taskContent = document.createTextNode(task.content);
        const taskDueDate = document.createTextNode(task.dueDate);
        const taskPriority = document.createTextNode(task.priority);
        const taskStatus = document.createTextNode(task.status);
        
        const deleteButton = document.createElement("button");
        deleteButton.className = "deleteTaskNoteProjectButton deleteTaskButton";
        deleteButton.textContent = "X";
        
        const expandButton = document.createElement("button");
        expandButton.className = "expandTaskButton";
        expandButton.textContent = ">";
        
        const editButton = document.createElement("button");
        editButton.className = "editTaskButton";
        editButton.textContent = "edit";
        editButton.dataset.taskId = task.id;

        const taskHeaderContainer = document.createElement("span");
        taskHeaderContainer.className = "taskHeader";
        taskHeaderContainer.append(taskTitle);
        
        const taskContentContainer = document.createElement("span");
        taskContentContainer.className = "taskContent";
        taskContentContainer.append(taskContent);

        const taskDueDateContainer = document.createElement("span");
        taskDueDateContainer.className = "taskDueDate"; 
        taskDueDateContainer.append(document.createElement("br"), "Due Date: ", taskDueDate);

        
        const taskPriorityContainer = document.createElement("span");
        taskPriorityContainer.className = "taskPriority";
        taskPriorityContainer.append("Prio: ", taskPriority);
        
        const taskStatusContainer = document.createElement("span");
        taskStatusContainer.className = "taskStatus";
        taskStatusContainer.append("Status: ", taskStatus);
        
        const taskBodyContainer = document.createElement("div");
        taskBodyContainer.className = "taskBody";
        taskBodyContainer.append(editButton, taskDueDateContainer, taskPriorityContainer, taskStatusContainer);
        
        
        const taskHiddenContainer = document.createElement("span");
        taskHiddenContainer.className = "taskHidden";
        taskHiddenContainer.append(taskContentContainer, taskBodyContainer);

        const topRow = document.createElement("div");
        topRow.className = "taskTopRow";
        topRow.append(expandButton, taskHeaderContainer, deleteButton);


        const li = document.createElement("li");
        li.className = "taskListItem";
        li.dataset.taskId = task.id;
        li.append(topRow, taskHiddenContainer);
        taskListContainer.appendChild(li);
    });
};

function setActiveQuest(id){
    activeQuestId = id;
    saveQuests();
}

function getActiveQuest(){
    return quests.find(quest => quest.id === activeQuestId);
};

function saveQuests(){
    storeLocalData("quests", quests);
    storeLocalData("activeQuestId", activeQuestId);
};

function addQuest(name){
    const quest = createQuest(name);
    quests.push(quest);
    return quest;
};

function deleteQuest(questId){
    if(questId === quests[0].id){
        alert("Default Quest cannot be deleted.");
        return;
    } else if (questId === activeQuestId){
        activeQuestId = quests[0].id;
    } else{
        quests = quests.filter(quest => quest.id !== questId);
    }
};

export {
    loadQuestlog,
    getActiveQuest,
    setActiveQuest,
    saveQuests,
    addQuest,
    deleteQuest
};
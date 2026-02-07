export const loadQuestlog = () => {
    const content = document.getElementById("content");
    content.innerHTML =
    `<div id = "questlogContent">
            <div id = "sidebar">
                <div class = "mainHeader">Projects
                    <button class = "addTaskNoteProject" id = "addProject">+</button>
                </div>
                <div id = "projectList"></div>
            </div>
            <div id = "main">
                <div class = "mainHeader">Questlog
                <button class = "addTaskNoteProject" id = "addTask">+</button>
                </div>
                <div id = taskList></div> 
            </div>
    </div>
    `;
};

const loadQuestlog = () => {
    const content = document.getElementById("content");
    content.innerHTML =
    `<div id = "questlogContent">
            <div id = "sidebar">
                <div class = "contentHeader">Projects
                    <button class = "addTaskNoteProject" id = "addProject">+</button>
                </div>
                <div class = "taskNotesProjectLists"></div>
            </div>
            <div id = "main">
                <div class = "contentHeader">Questlog
                <button class = "addTaskNoteProject" id = "addTask">+</button>
                </div>
                <div class = "taskNotesProjectLists"></div>
            </div>
    </div>
    `;
};

export {loadQuestlog};
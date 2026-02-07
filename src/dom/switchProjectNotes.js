import {loadQuestlog} from "./questlog";
import {loadNotes} from "./notes";

let isShowingQuestlog = true;

const switchButton = document.getElementById("switchProjectsNotes").addEventListener("click", () => {
        if(isShowingQuestlog){
        const currentContent = loadNotes();
        isShowingQuestlog = false;
        return{
            currentContent
        };
    } else {
        const currrentContent = loadQuestlog();
        isShowingQuestlog = true;
        return{
            currrentContent
        };
    }
});


export {switchButton};
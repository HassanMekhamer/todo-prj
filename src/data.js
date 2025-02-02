export class Item {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
    }

    addToList() {
        activeList.push(this);
    }

    delFromList() {
        if (!activeList.includes(this)) return;
        const index = activeList.indexOf(this);
        if (index > -1) {
            activeList.splice(index, 1);
        }
    }

    checkDone() {
        this.delFromList();
        archive.push(this)
    }
};

export let activeList = [
   
];

export let archive = [

];




//DOM items
//item input elements
export let newTitle = document.querySelector("#title");
export let newDescription = document.querySelector("#description");
export let newDueDate = document.querySelector("#dueDate");
export let newPriority = document.querySelector("#priority");
export let newNotes = document.querySelector("#notes")

//tabs
export let archiveBtn = document.querySelector(".archiveBtn");
export let homeBtn = document.querySelector(".homeBtn");

//buttons
export let viewed = document.querySelector(".viewed")
export let addToListBtn = document.querySelector(".addToListBtn");

//creating home-list element (home-tab) active items
export let homeList = document.createElement("div")
//creating archived-list element (archived tab) archived items
export let archivedlist = document.createElement("div")

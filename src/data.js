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
        // activeList.pop()
    }

    checkDone() {
        this.delFromList();
        archive.push(this)
    }
};

export let activeList = [
    new Item("how to",
        "you just use the inputs below and make sure to submit using the button",
        "no date"),
];

export let archive = [

];




//DOM selectors
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
export let homeList = document.querySelector(".home")
export let addToListBtn = document.querySelector(".addToListBtn");


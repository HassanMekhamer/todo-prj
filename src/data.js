export class Item {
    constructor(title, description, dueDate, priority, notes, show) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.show = false;
    }

    addToList() {
        active.push(this);
    }

    checkDone() {
        if (!active.includes(this)) return;
        const index = active.indexOf(this);
        if (index > -1) {
            active.splice(index, 1);
        }
        archive.push(this)
    }
};

export let active = [
   
];

export let archive = [

];

//DOM Eleme
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

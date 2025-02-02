import "./style.css";
import { } from "./input";
import { activeList, archive } from './data.js'


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


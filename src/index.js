import "./style.css";
import { addToListBtn, createItem } from "./input";


//DOM selectors
const htmlList = document.querySelector("#list");


let list = [

]
let archive = [

]

class Item {
    constructor(title, description, dueDate, priority, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;   
    }

    addToList() {
        list.push(this)
    }

    delFromList() {
        list.pop()
    }

    checkDone() {
        list.pop()
        archive.push(this)
    }
}

addToListBtn.addEventListener("click", createItem)


export { Item, htmlList, list}

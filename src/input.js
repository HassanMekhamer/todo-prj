// import { Item, } from './index.js'
import { } from "./done.js"
import { newTitle, newDescription, newDueDate, newPriority, newNotes, activeList, archive, addToListBtn, Item, homeBtn, homeList } from './data.js'
import { viewHome } from "./home.js"

//list selectors

//add to list button selector

export function createItem() {
    let newItem = new Item(newTitle.value, newDescription.value, newDueDate.value, newPriority.value, newNotes.value)

    if (newItem.title !== "") {
        //add it to the active list
        newItem.addToList()

        viewHome(activeList)

        newTitle.value = ""
        newDescription.value = ""
        newDueDate.value = ""
        newPriority.value = ""
        newNotes.value = ""           
    } else {
        alert("add at least a title to the task")
    }
}



addToListBtn.addEventListener("click", createItem)





















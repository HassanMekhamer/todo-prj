// import { Item, } from './index.js'
import { } from "./done.js"
import { newTitle, newDescription, newDueDate, newPriority, newNotes, activeList, addToListBtn, Item, homeBtn, homeList } from './data.js'
import { viewHome } from "./home.js"

//list selectors

//add to list button selector

export function createItem() {
    // homeList.innerHTML = ""

    let newItem = new Item(newTitle.value, newDescription.value, newDueDate.value, newPriority.value, newNotes.value)

    let showBtn = document.createElement("button")
    showBtn.textContent = "show"

    function toggleItem(item) {
        if (item.show) {
            let para = document.createElement("p");
            para.textContent = item.description
            itemElement.appendChild(para)

        }
        console.log("toggle works")
    }
    showBtn.addEventListener("click", () => {
        newItem.show ? true : false;
        toggleItem(newItem)

    })

   

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





















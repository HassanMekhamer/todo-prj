// import { Item, } from './index.js'
import { } from "./done.js"
import { newTitle, newDescription, newDueDate, newPriority, newNotes, activeList, archive, addToListBtn, Item, homeBtn, homeList } from './data.js'
import { viewHome } from "./home.js"

//list selectors

//add to list button selector

export function createItem() {
    let newItem = new Item(newTitle.value, newDescription.value, newDueDate.value, newPriority.value, newNotes.value)

    if (newItem.title !== "") {

        // //creating elements for item
        // let itemElement = document.createElement("div");
        // let head = document.createElement("h4");
        // let para = document.createElement("p");
        // //check and delete buttons
        // let checkBtn = document.createElement("button");
        // let delBtn = document.createElement("button")

        // //text contect
        // head.textContent = newItem.title;
        // para.textContent = newItem.description;
        // checkBtn.textContent = "Check/Done";
        // delBtn.textContent = "X";

        // //appending the children to the parent item(task)
        // itemElement.appendChild(head)
        // itemElement.appendChild(para)
        // itemElement.appendChild(checkBtn)
        // itemElement.appendChild(delBtn);

        // //adding classes for styling
        // delBtn.classList.add("delBtn")
        // checkBtn.classList.add("checkBtn")

        //add it to the active list
        newItem.addToList()

        // //appending the item to the viewed homeList
        // homeList.appendChild(itemElement)

        // checkBtn.addEventListener("click", () => {
        //     homeList.removeChild(itemElement)
        //     newItem.checkDone()
        // })

        // delBtn.addEventListener("click", () => {
        //     homeList.removeChild(itemElement)
        //     newItem.delFromList()
        // })

        newTitle.value = ""
        newDescription.value = ""
        newDueDate.value = ""
        newPriority.value = ""
        newNotes.value = ""     
        
        viewHome(activeList)
    } else {
        alert("add at least a title to the task")
    }
}























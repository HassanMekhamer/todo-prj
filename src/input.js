// import { Item, } from './index.js'
import { } from "./done.js"
import { newTitle, newDescription, newDueDate, newPriority, newNotes, activeList, archive, addToListBtn, Item, homeBtn, homeList } from './data.js'

//list selectors

//add to list button selector

addToListBtn.addEventListener("click", createItem)


function createItem() {
    let newItem = new Item(newTitle.value, newDescription.value, newDueDate.value, newPriority.value, newNotes.value)

    if (newItem.title !== "") {
        newItem.addToList()

        //creating elements for each item/task
        let itemElement = document.createElement("div");
        let head = document.createElement("h4");
        let para = document.createElement("p");
        let checkBtn = document.createElement("button");
        let delBtn = document.createElement("button")

        //text contect
        head.textContent = newItem.title;
        para.textContent = newItem.description;
        checkBtn.textContent = "Check/Done";
        delBtn.textContent = "X";

        //appending the elemnts to the parent item(task)
        itemElement.appendChild(head)
        itemElement.appendChild(para)
        itemElement.appendChild(checkBtn)
        itemElement.appendChild(delBtn);

        //adding classes for styling
        delBtn.classList.add("delBtn")
        checkBtn.classList.add("checkBtn")

        console.log(activeList)
        console.log(homeList)

        checkBtn.addEventListener("click", () => {
            activeList.removeChild(itemElement)
            archive.push(this)
            newItem.checkDone()
        })

        delBtn.addEventListener("click", () => {
            htmlList.removeChild(itemElement)
            newItem.delFromList()
        })
    } else {
        alert("add at least a title to the task")
    }
}


export { addToListBtn, createItem }
























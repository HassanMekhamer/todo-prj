// import { Item, } from './index.js'
import { } from "./done.js"
import { newTitle, newDescription, newDueDate, newPriority, newNotes, active, addToListBtn, Item, archivedlist, archive } from './data.js'
import { viewHome } from "./home.js"

export function createItem() {
    let newItem = new Item(newTitle.value, newDescription.value, newDueDate.value, newPriority.value, newNotes.value)

    if (newItem.title !== "") {
        //add it to the active list
        newItem.addToList()
        viewHome(active)

        newTitle.value = ""
        newDescription.value = ""
        newDueDate.value = ""
        newPriority.value = ""
        newNotes.value = ""
    } else {
        alert("add at least a title to the task")
    }
}

//function to create the html element in DOM from new item
//obj is item, list is array, nodelist is htmlList
export function createElement(obj, list, nodeList) {
    
    let itemElement = document.createElement("div");
    let head = document.createElement("h4");
    let delBtn = document.createElement("button")
    let showBtn = document.createElement("button");


    //text contect
    head.textContent = obj.title;
    delBtn.textContent = "X";
    showBtn.textContent = "show"


    //appending the children to the parent item(task)
    itemElement.appendChild(head)
    itemElement.appendChild(delBtn);
    itemElement.appendChild(showBtn)


    delBtn.addEventListener("click", () => {
        nodeList.removeChild(itemElement)
        const index = list.indexOf(obj)
        if (index > -1) {
            list.splice(index, 1)
        }
    })

    showBtn.addEventListener("click", () => {
        obj.show = !obj.show;

        if (obj.show) {
            let para = document.createElement("p");
            para.classList.add("desc")
            para.textContent = obj.description
            itemElement.appendChild(para)
        } else {
            let para = document.querySelector(".desc")
            itemElement.removeChild(para)
        }
    })

    return itemElement
    
}

addToListBtn.addEventListener("click", createItem)

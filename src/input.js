import { Item, htmlList, list } from './index.js'

//list selectors
let newTitle = document.querySelector("#title");
let newDescription = document.querySelector("#description");
let newDueDate = document.querySelector("#dueDate");
let newPriority = document.querySelector("#priority");
let newNotes = document.querySelector("#notes")

//add to list button selector
let addToListBtn = document.querySelector(".addToList");

addToListBtn.addEventListener("click", createItem)


function createItem() {
    let newItem = new Item(newTitle.value, newDescription.value, newDueDate.value, newPriority.value, newNotes.value)

    newItem.addToList()

    let itemElement = document.createElement("div");
    let head = document.createElement("h4");
    let para = document.createElement("p");

    head.textContent = newItem.title;
    para.textContent = newItem.description;

    itemElement.appendChild(head)
    itemElement.appendChild(para)
    htmlList.appendChild(itemElement)

    let delBtn = document.createElement("button")
    delBtn.classList.add(".delBtn")
    delBtn.textContent = "delete"
    itemElement.appendChild(delBtn);


    delBtn.addEventListener("click", () => {
        htmlList.removeChild(itemElement)
        newItem.delFromList()
        console.log(list)

    })

    console.log(list)
}


export { addToListBtn, createItem }
























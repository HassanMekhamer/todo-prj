import { viewed, homeList, activeList, homeBtn } from './data'

//function to work on the activeList array and view it in HTML
export function viewHome(list) {
    console.log("works")

    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        let itemElement = document.createElement("div");
        let head = document.createElement("h4");
        let para = document.createElement("p");
        //check and delete buttons
        let checkBtn = document.createElement("button");
        let delBtn = document.createElement("button")

        //text contect
        head.textContent = item.title;
        para.textContent = item.description;
        checkBtn.textContent = "Check/Done";
        delBtn.textContent = "X";

        //appending the children to the parent item(task)
        itemElement.appendChild(head)
        itemElement.appendChild(para)
        itemElement.appendChild(checkBtn)
        itemElement.appendChild(delBtn);


        checkBtn.addEventListener("click", () => {
            homeList.removeChild(itemElement)
            item.checkDone()
        })

        delBtn.addEventListener("click", () => {
            homeList.removeChild(itemElement)
            item.delFromList()
        })

        homeList.appendChild(itemElement)
    }
    viewed.appendChild(homeList)

};


homeBtn.addEventListener("click", () => {
    viewHome(activeList)
});


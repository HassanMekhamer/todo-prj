import { viewed, homeList, activeList, homeBtn } from './data'

//function to work on the activeList array and view it in HTML
export function viewHome(list) {
    viewed.innerHTML = ""
    console.log("works")
    homeList.innerHTML = ""

    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        let itemElement = document.createElement("div");
        let head = document.createElement("h4");
        let showBtn = document.createElement("button")
        showBtn.textContent = "show"

        showBtn.addEventListener("click", () => {
            item.show ? true : false;
        })

        function toggleItem(item) {
            if (item.show) {
                let para = document.createElement("p");
                para.textContent = item.description
                itemElement.appendChild(para)

            }
        }
        toggleItem(item)


        //check and delete buttons
        let checkBtn = document.createElement("button");
        let delBtn = document.createElement("button")

        //text contect
        head.textContent = item.title;

        checkBtn.textContent = "Check/Done";
        delBtn.textContent = "X";

        //appending the children to the parent item(task)
        itemElement.appendChild(head)
        itemElement.appendChild(showBtn)
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


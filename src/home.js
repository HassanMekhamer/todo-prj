import { viewed, homeList, activeList, homeBtn } from './data'

//function to work on the activeList array and view it in HTML
export function viewHome(list) {
    viewed.innerHTML = ""
    homeList.innerHTML = ""

    for (let i = 0; i < list.length; i++) {
        const item = list[i];

        let itemElement = document.createElement("div");
        let head = document.createElement("h4");

        //check and delete buttons
        let checkBtn = document.createElement("button");
        let delBtn = document.createElement("button");
        let showBtn = document.createElement("button");

        //text contect
        head.textContent = item.title;
        showBtn.textContent = "show"
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

        showBtn.addEventListener("click", () => {
            item.show = !item.show;

            if (item.show) {
                console.log("toggle works");
                let para = document.createElement("p");
                para.classList.add("desc")
                para.textContent = item.description
                itemElement.appendChild(para)
            } else {
                let para = document.querySelector(".desc")
                itemElement.removeChild(para)
            }
        })

        homeList.appendChild(itemElement)
    }
    viewed.appendChild(homeList)

};


homeBtn.addEventListener("click", () => {
    viewHome(activeList)
});


// import { } from ".index.js";
import { archivedlist, viewed } from './data.js'

export function viewArchive(list) {
    viewed.innerHTML = ""
    archivedlist.innerHTML = ""
    list.forEach(item => {

        let itemElement = document.createElement("div");
        let head = document.createElement("h4");
        let para = document.createElement("p");
        //delete buttons
        let delBtn = document.createElement("button")

        //text contect
        head.textContent = item.title;
        para.textContent = item.description;
        delBtn.textContent = "X";

        //appending the children to the parent item(task)
        itemElement.appendChild(head)
        itemElement.appendChild(para)
        itemElement.appendChild(delBtn);

        delBtn.addEventListener("click", () => {
            homeList.removeChild(itemElement)
            item.delFromList()
        })

        archivedlist.appendChild(itemElement)
    });

    viewed.innerHTML = ""
    viewed.appendChild(archivedlist)
}
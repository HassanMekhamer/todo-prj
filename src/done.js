import { archivedlist, viewed, archive } from './data.js'

export function viewArchive(list) {
    viewed.innerHTML = ""
    archivedlist.innerHTML = ""

    list.forEach((item) => {

        let itemElement = document.createElement("div");
        let head = document.createElement("h4");
        //delete buttons
        let delBtn = document.createElement("button")
        let showBtn = document.createElement("button");


        //text contect
        head.textContent = item.title;
        delBtn.textContent = "X";
        showBtn.textContent = "show"


        //appending the children to the parent item(task)
        itemElement.appendChild(head)
        itemElement.appendChild(delBtn);
        itemElement.appendChild(showBtn)


        delBtn.addEventListener("click", () => {
            archivedlist.removeChild(itemElement)

            if (!archive.includes(this)) return;
            const indexx = archive.indexOf(this);
            if (indexx > -1) {
                archive.splice(indexx, 1);
            }
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


        archivedlist.appendChild(itemElement)
    });

    viewed.appendChild(archivedlist)
}
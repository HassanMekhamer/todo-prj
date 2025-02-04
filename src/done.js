import { archivedlist, viewed, archive, archiveBtn } from './data.js'
import { createElement } from './input.js';




export function viewArchive(list) {
    viewed.innerHTML = ""
    archivedlist.innerHTML = ""

    list.forEach((item) => {

        let itemE = createElement(item, list, archivedlist)

        archivedlist.appendChild(itemE)
    });

    viewed.appendChild(archivedlist)
}



archiveBtn.addEventListener("click", () => {
    viewArchive(archive)
})
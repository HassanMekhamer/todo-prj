import { viewed, archivedlist, archive, archiveBtn } from './data.js'
import { createElement } from './input.js';

export function viewArchive(list) {
    viewed.innerHTML = ""
    archivedlist.innerHTML = ""

    list.forEach((item) => {

        let itemElement = createElement(item, list, archivedlist)

        archivedlist.appendChild(itemElement)
    });

    viewed.appendChild(archivedlist)
}

archiveBtn.addEventListener("click", () => {
    viewArchive(archive)
})
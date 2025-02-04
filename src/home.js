import { viewed, homeList, active, homeBtn } from './data'
import { createElement } from './input';

//function to work on the activeList array and view it in HTML
export function viewHome(list) {
    viewed.innerHTML = ""
    homeList.innerHTML = ""

    list.forEach(item => {
        
        let itemElement = createElement(item, list, homeList)

        let checkBtn = document.createElement("button");
        checkBtn.textContent = "Check/archive";
        itemElement.appendChild(checkBtn)

        checkBtn.addEventListener("click", () => {
            homeList.removeChild(itemElement)
            item.checkDone()
        })

       

        homeList.appendChild(itemElement)
    });
    viewed.appendChild(homeList)

};


homeBtn.addEventListener("click", () => {
    viewHome(active)
});


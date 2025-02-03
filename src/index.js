import "./style.css";
import { } from "./input";
import { activeList, archive, archiveBtn, } from './data.js'
import { viewHome } from './home.js'
import { viewArchive } from "./done.js";

viewHome(activeList)

archiveBtn.addEventListener("click", () => {
    viewArchive(archive)
})
import "./style.css";
import { createItem } from "./input";
import { newTitle, newDescription, newDueDate, newPriority, newNotes, activeList, archive, addToListBtn, Item, homeBtn, homeList, } from './data.js'
import {viewHome } from './home.js'

viewHome(activeList)
addToListBtn.addEventListener("click", createItem)

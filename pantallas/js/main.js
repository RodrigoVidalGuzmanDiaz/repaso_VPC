import {item} from "./componentes/itemGaleria.js";


let root = document.querySelector("#root");


// Crear una sección
let galeria = document.createElement("section");
galeria.innerHTML = item;


// GREGAR AL DOM
root.appendChild(galeria);
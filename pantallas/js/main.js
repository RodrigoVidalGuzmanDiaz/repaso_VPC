import {item} from "./componentes/itemGaleria.js";


let root = document.querySelector("#root");


// Crear una sección
let galeria = document.createElement("section");
galeria.setAttribute("class","galeria");

galeria.innerHTML = item(1);


// GREGAR AL DOM
root.appendChild(galeria);
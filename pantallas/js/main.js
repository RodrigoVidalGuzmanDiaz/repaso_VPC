import {item} from "./componentes/itemGaleria.js";
import {producto} from "./data/img.js"
let root = document.querySelector("#root");


function cargarGaleria(){

    let galeria = document.querySelector("#galeria");

    producto.forEach(function(elemento,indice){

        let div = document.createElement("div");
        div.setAttribute("class","item");
        div.innerHTML = item(indice);

        galeria.appendChild(div);
    })

}

cargarGaleria();



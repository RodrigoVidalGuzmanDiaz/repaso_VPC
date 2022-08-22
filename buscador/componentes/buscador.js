import {root} from './../js/main,js';

export let buscador = document.createElement("div");

buscador.innerHTML = 
'<input id="inputProducto" placeholder="producto">' +
'<div class="bt" id="bt_buscar">'+"Entrar"+'</div>';


// BUSCAR EL DATO
export function buscarDato(){
    let resultado = document.createElement("p");
    resultado.innerHTML = "dato";
    root.appendChild(resultado);
}



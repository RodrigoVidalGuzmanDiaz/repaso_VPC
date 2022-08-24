import {producto} from "./../data/img.js";


export function item(el_producto){
let contenido =
    '<div class="cj_img">' +
        '<img src="'+ producto[el_producto].img +'">'+
    '</div>'+
    '<p class="descripcion">'+ producto[el_producto].descripcion +'</p>'+
    '<spam class="precio"> Q'+ producto[el_producto].precio + '</spam>';

return contenido;
}

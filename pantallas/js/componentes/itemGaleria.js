import {producto} from "./../data/img.js";

let el_producto = 1

export let item = 
'<div class="item">'+
    '<div class="cj_img">' +
        '<img src="'+ producto[el_producto].img +'">'+
    '</div>'+
    '<p class="descripcion">'+ producto[el_producto].descripcion +'</p>'+
    '<spam class="precio"> Q'+ producto[el_producto].precio + '</spam>' +
'</div>';

//cargar el elemento que quiero modificar
//1.- cargar el boton 
var boton = document.querySelector("#btAgregar");
//2.- darle evento
boton.addEventListener("click",function(){
    //crear el input de tipo texto
    let textoNuevo = document.createElement("input");
    //cambio el atributo para que sea un text
    textoNuevo.setAttribute("type","text");
    //cargar el formulario donde agregaré el elemento
    let formulario= document.querySelector("form");
    //agregar un salto de linea (br)
    let salto = document.createElement("br");
    formulario.appendChild(salto);
    //agregar el elemento al form
    formulario.appendChild(textoNuevo); 
})





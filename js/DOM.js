

var parrafo = document.querySelector("p");
/* parrafo.innerText="hola";

var parrafos=document.querySelectorAll("p");

for (i=0;i<parrafos.length;i++){
    parrafos[i].innerText="Chao";
    //parrafos[i].style.color="blue";
    parrafos[i].className="estilo2";
    console.log(i);
} */

console.log(parrafo.innerHTML)
console.log(parrafo.innerText)
//parrafo.innerHTML="<i>hola que tal</i> chao"
parrafo.innerText="<i>hola que tal</i> chao"
console.log(parrafo.innerHTML)
//console.log(parrafo.innerText)

var link= document.querySelector("a")
link.setAttribute("href","http://www.emol.com");


//agregar un elemento
var imagen=document.createElement("img");
imagen.innerText="hola";
imagen.width="100";
imagen.height="100";
imagen.setAttribute("src","foto.jpg");
document.body.appendChild(imagen);
document.body.prepend(imagen);
document.insertBefore(imagen);
document.
//ultimoElemento2.after para agrgar despues
//ultimoElemento2.befor par agregar antes
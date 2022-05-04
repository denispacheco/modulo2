
var encabezado = document.querySelector("#header");
encabezado.className = "estilo2";

var tituloPrincipal= document.querySelector("#header h1");
//var tituloPrincipal= document.querySelector("h1");
//var tituloPrincipal= encabezado.querySelector("h1");

//sólo carga texto
//tituloPrincipal.innerText="<i>Título cambiado</i>";
//detecta las etiquetas y las carga como tales
tituloPrincipal.innerHTML="<i>Título cambiado 2</i>";

//cambiar el texto del primer párrafo
var primerParrafo=document.querySelector(".estilo1");
//var primerParrafo=document.querySelector("p");
//var primerParrafo=document.querySelector("#contenido p");
primerParrafo.innerText = "hola que tal, festival"

//carga de todos los elementos <p> en un arreglo 
var parrafos = document.querySelectorAll("p");
//parrafos[1].className="estilo2";
//recorrido del arreglo
for (i=0; i<parrafos.length; i++){
    parrafos[i].innerText="--------------------------------";
}

//asignar el estilo1 a los elementos pares y estilo2 a los elementos impares
//de la lista del footer

var elementosLi = document.querySelectorAll("li");

for(i=0;i<elementosLi.length;i++){
    if(i%2==0){
         elementosLi[i].className="estilo1";
    }else{
        elementosLi[i].className="estilo2";
    }
}

/*
for(i=0;i<elementosLi.length;i++){   
         elementosLi[i].className= i%2==0?"estilo1":"estilo2";
}
*/

//cambio de un
var link = document.querySelector("a");

console.log("link: " + link.getAttribute("href"));

link.setAttribute("href","https://www.youtube.com/");

//cargar img2 en la foto del sitio
var imagen =  document.querySelector("img");
imagen.setAttribute("src","img/img2.jpg");

//crear un elemento div
var nuevoDiv= document.createElement("div");
nuevoDiv.innerText="nuevo div";
nuevoDiv.style.color="red";
//agregarlo a la página
document.body.appendChild(nuevoDiv);

//agregar direccion al footer (dentro de un li)
var nuevoLi= document.createElement("li");
nuevoLi.innerText="Las Camelias 123";
nuevoLi.className="estilo2";
//como lo agrego a la lista ? (ul)
var listaUl = document.querySelector("ul");
listaUl.appendChild(nuevoLi);

//desafio: agregar un nuevo elemento al contenido que contenga:
//un titulo
//un parrafo
//un link













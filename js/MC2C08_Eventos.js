function cambiarFondo(){
    document.body.style.backgroundColor="Black";
    document.body.style.color="white";
} 

var boton = document.querySelector("#boton1");

//agregar la fucnión al evento
//primer parametro: texto que indica el evento

//forma noob
//boton.addEventListener("click",cambiarFondo);

//forma normal
boton.addEventListener("click",
    function(infoDelEvento){
        document.body.style.backgroundColor="Black";
        document.body.style.color="white";
        //esto es para mostrar la informacion del evento
        console.log(infoDelEvento);
       if(infoDelEvento.type=="click"){
           alert("se hizo click");
       }
    }
)

//forma avanza
/* boton.addEventListener("click",(e)=>{
        document.body.style.backgroundColor="Black";
        document.body.style.color="white";
}); */

//cambiar la foto al hacer clicksobre ella
//1.- cargar el elemento que quiero modificar
var imagen = document.querySelector("img");
//2.-crear función
function cambiarFoto(){
    imagen.setAttribute("src","img/img2.jpg");
}
//3.- agregar evento
imagen.addEventListener("click",cambiarFoto);

//----------------------------------------------------
//forma normal
//1.- cargar el elemento que quiero modificar
imagen = document.querySelector("img");
//2.- agregar el evento
imagen.addEventListener("click", function(){
    imagen.setAttribute("src","img/img2.jpg");
})
//---------------------------------------------------
//cambiar color de fondo de un parrafo cuando se pase
//el mouse sobre el volver al color normal
// cuando se quite el mause
//usando:
//mouseover
//mouseout
//1.- cargar el parrafo
var parrafo =  document.querySelector("p");
//2.- agregar el evento
parrafo.addEventListener("mouseover",function(){
    parrafo.style.backgroundColor="blue";
    parrafo.style.color="yellow";
} );
parrafo.addEventListener("mouseout",function(){
    this.style.backgroundColor="white";
    this.style.color="black";
})

//------------------------------------------------
var elementosLi = document.querySelectorAll("li");

console.log(elementosLi.length);

for (i=0;i<elementosLi.length;i++) {
    elementosLi[i].addEventListener("mouseover",function(){       
        this.style.color="red";
    });
    elementosLi[i].addEventListener("mouseout",function(){
       this.style.color="black";
    })
}
//------------------------------------------------
//1 cargar el elemento
var texto = document.querySelector("#texto");
//2 agregar el evento (keydown)
texto.addEventListener("keydown",function(info){
   //console.log(info);
   if (info.key=='a'){
       info.preventDefault();
   }
})
//-----------------------------------------------
//1.- cargar el elemento
var botonEnviar=document.querySelector("#enviar");
//2.- cargar el campo de texto
texto = document.querySelector("#texto");
//3.- asignar el evento
botonEnviar.addEventListener("click",function(){
    if(texto.value==""){
        //alert("el campo está vacío");
        texto.className="error";
    }
})

//crear una web con un formulario donde agreguen:
//un campo de texto para el nombre
//un boton para agregar familiar, y cuando se presione
//se agregue un campo de texto extra (para el nombre del familiar)
//al final un botón enviar, para que revise si no hay ningun campo de
//texto vacío














 
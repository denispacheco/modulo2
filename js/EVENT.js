
//cambiar el fondo a traves de un click
var boton=document.querySelector("button");

boton.addEventListener("click",()=>{
    document.body.style.backgroundColor="black";
})

//alternativa
boton.addEventListener("click",function(){
    document.body.style.backgroundColor="black";
})


var texto= document.querySelector("#texto");

texto.addEventListener("keydown",function(e){
    if (e.key=="a"){        
       e.preventDefault();
        //alert("A");
    }

});

var elementos= document.querySelectorAll("li");
elementos.forEach(function(e){
    e.addEventListener("mouseover",function(e){
        this.style.backgroundColor="blue";
        this.style.color="yellow";
        console.log(e);
    });
    e.addEventListener("mouseout",function(){
        e.style.backgroundColor="white";
        e.style.color="black";
    })
})
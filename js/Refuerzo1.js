/* 
function retornarTexto(condicion){
    if (condicion==true){
        return "SI!!!";
    }else{
        return "NO!!";
    }
}


var condicion=false;

condicion? 5:4;

var Visto = true;
console.log("has visto la pelicula? " +    retornarTexto(Visto));

console.log("has visto la pelicula? " +  (Visto?"Viste":"NO lo viste") + "rgrge"+ objetoAuto.propiedad + "vsdfvsd"); */

/*

function arregloDeObjetos(texto, numero){
    let resultado = [];

    resultado.push({texto,numero});
    console.log(resultado)

}
  arregloDeObjetos("hola",2);

*/


//recibir numeros, infinitamente, hasta que el usuario ingrese un 0
//entregar como resultado el número mayor

let numero;
let numeroGuardado=-1;
while(numero!= 0){
    numero= parseInt(prompt("Ingrese un número"));
    if (numero>numeroGuardado){
        numeroGuardado=numero;
    }
}

alert("el numero mayor es: " + numeroGuardado );


//-------------------------------------------------------------------------------------------------------
//recibir palabras hasta que el usuario ingrese la palabra "fin"
//estas palabras deben guardarse en un arreglo y al final resonderle al usurio cuantas palabras empiezan con "a".

let palabra; //almacena la respuesta del usuario (desde el prompt)
let arreglo=[];  //almacena las palabras ingresadas
let contador=0;   //contar palabras que empiecen con a

while (palabra!="fin") {
    palabra = prompt("ingrese una palabra").toLowerCase();
    if(palabra!="fin"){
        arreglo.push(palabra);        
    }
}

for(i=0;i<arreglo.length;i++){
    if (arreglo[i].startsWith("a")){
        contador++;
    }
}
console.table(arreglo);
console.log("la cantidad de palabras que comienzan con a es:" + contador);

//-----------------------------otra forma de contar palabras con "a" pero sin arreglos 
while (palabra!="fin") {
    palabra = prompt("ingrese una palabra").toLowerCase();
    if(palabra!="fin"){
        if (palabra[0]=="a"){
            contador++;
        }
    }
}

//------------------------------------------------------
//revisar si una palabra contiene vocales

 palabra="Hola que tal"
let vocales="aeiou" 

for(i=0;i<palabra.length;i++){
    if (vocales.indexOf(palabra[i])>=0){
        //es vocal
        //reem,plzar las vocales por una A
        console.log(palabra[i]);        
        palabra=palabra.replace(palabra[i],"A");        
    }else{
        //es letra
    }
}

console.log(palabra);








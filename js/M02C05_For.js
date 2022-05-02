
//ciclo normal
for (i=0;i<10;i++){
    console.log("el valor de i es:" + i);
}
console.log("------------------------------------");
//ciclo que no empieza en 0
for (i=5;i<10;i++){
    console.log("el valor de i es:" + i);
}
console.log("------------------------------------");
//ciclo que no empieza en 0
for (i=0;i<10;i+=2){
    console.log("el valor de i es:" + i);
}
console.log("------------------------------------");
//ciclo con diferentes valores
for (i=5;i<=11;i+=3){
    console.log("el valor de i es:" + i);
}
console.log("------------------------------------");
//ciclo que no empieza en 0
for (i=10;i>0;i--){
    console.log("el valor de i es:" + i);
}
console.log("------------------------------------");

var letras="abcdefgh";
for(i=0; i<letras.length;i++){
    console.log(letras[i]);
}

//contar vocales
var palabra="Hola que tal, festival!";
var contadorVocales=0;
for(i=0; i<palabra.length;i++){
   if(palabra[i]=="a" || palabra[i]=="e" || palabra[i]=="i" || palabra[i]=="o" || palabra[i]=="u"){
    contadorVocales++;
   }
}
console.log("la cantidad de vocales es:"  + contadorVocales);

//mostrar en pantalla letras pares
palabra="Curso de FullSTack con Javascript";
for(i=0;i<palabra.length;i+=2){
    console.log(palabra[i]);
}

console.log("----------------------------")
//generar el arreglo al reves
palabra="Hola que tal!";
var resultado=[];
for(i=palabra.length-1;i>=0;i--){
    console.log(palabra[i]);
    resultado.push(palabra[i]);
}

console.log(resultado);

//lo mismo pero dentro de una función
function darVuelta(arreglo){
    let resultado=[];
    for(i=arreglo.length-1;i>=0;i--){        
        resultado.push(arreglo[i]);
    }
    return resultado;
}

function darVueltasV2(arreglo){
    let resultado=[];
    for(i=0;i<arreglo.length;i++){
        resultado.unshift(arreglo[i]);
    }
    return resultado;
}

console.log("----------------------------")
var numeros=[1,2,3,4,5];
letras=["a","dfd","45","z"];
console.log("normal")
console.table(numeros);
console.table(letras);
console.log("llamar a la función dar vuelta")
console.table(darVuelta(numeros));
console.table(darVuelta(letras));

//---------------------------------------------------------------------------
//RESUMEN
//1) arreglos:
//el indice de cada elemento se lee con llaves []
//ejemplo
var animales=["perro","gato","cebra","cocodrilo"];
//sio quiero saber cual es el elemento 2, llamo al arreglo con las llaves y el 2 [2]
var animalDos=animales[2]; //me retorn cebra
//el indidice siempre empieza en 0
//el elemento 0, en este arreglo es perro
//el {ultimo } elemento siempre es lenght-1, donde lengjt es el largo del arreglo ( cantidad de elementos)
//ejemplpo
var ultimoIndice=animales.length-1;
var ultimoAninmal=animales[ultimoIndice]; //cocodrilo

//2) FOR: ciclo definido por:
/*  incializacion del contador (genberalmente i=0)
condicion de ejecución (i<algo o i mayor que algo, generalmente, para arreglos i<arreglo.lenght-1)
incremento: de cuanto en cuanto a a aumentar el contador (generalemente de uno en uno, o sea i++)
el blqoue de codigo se ejecuta hasta que NO se cumpla la condición

generalmente se usa para recorrer un arreglo (ejecutar la misma cantidad de veces que elementos tenga el arreglo)

for(i=0;i<arreglo.lenght;i++){
    hacer algo con el elemento del arreglo
    arreglo[i];
}

el i es el indice o posicion del elemento en este caso , y va a ir incrementandose de a uno


*/

for( i=0;i<animales.length;i++){
    console.log(animales[i]);
}
//salida
//1) i=0 y escribe "perro"
//2) i=1 y escribe "gato"
//3) i=2 y escribe "cebra"
//4) i=3 y escibe "cocodrilo"
//5/ i=4 , pero no se cumple la condición i<animales.lenght porque animales.lenght vale 4 y 4 no es menor que 4 (4<4);









//--------------------------------------------------------------------------------------------------------------
//funciones matematicas
console.log(Math.PI);
console.log(Math.E);
console.log(Math.random());

console.log(Math.ceil(5.8));
console.log(Math.floor(5.8))
console.log(Math.round(5.8));
//console.log(3*3*3)
console.log(Math.pow(3,3));




var contador=0;
while(contador<100){
    console.log(Math.floor(Math.random()*10));
    contador++;
}


//--------------------------------------------------------------------------------------------------------------

//pedir un numero y elevarlo al cuadrado
/*var numero = prompt("ingrese un número"); //pedir número y guardarlo en la variable

if (Number(numero)){
    console.log(Number(numero));
    console.log("conversion correcta");
}else{
    console.log(Number(numero));
    console.log("conversion incorrecta");
}

var cuadrado = numero*numero; //calcular el cuadrado del número
alert("el cuadrado de " + numero + " es " + cuadrado);*/
//-------------------------------------------------------------------------------------------------------------
//mismmo ejercicio pero corregido para que detecte cuando el valor ingresado es un número
/*numero = prompt("ingrese un número"); //pedir número y guardarlo en la variable
var cuadrado = numero*numero; //calcular el cuadrado del número

if (numero=="0"){   //caso especial, cuando se ingresa un 0
    alert("el cuadrado de 0 es 0");
}else if (Number(numero)){ //cuando lo ingresado es un número distinto a 0
    alert("el cuadrado de " + numero + " es " + cuadrado);
}else{ //caso por defecto: cualquier cosa que no cumpla las condiciones anteriores, o sea no es número
    alert("la cifra ingresada no es un número");
}*/
//-------------------------------------------------------------------------------------------------------------
//ciclos

console.log("inicio, el bus está vacío");
var contador=0; //variable que lleva la cuenta de la cantidad de pasajeros
while(contador<20){ //se repite el bloque (entre las llaves {}) hasta que el contador sea 20
    console.log("un nuevo pasajero se ha subido");
    contador=contador+1;  //le suma uno al contador
    //es lo mismo que contador++;
    console.log("hay " + contador + " pasajero(s) en el bus");
    console.log("------------------------------------------");    
}
console.log("el bus está lleno. es hora de partir");
//------------------------------------------------------------------------------------------------------------
//ciclo para pedir numeros y entregar la suma de todos ellos hasta que el usuario ingrese un 0
var numero=1; //va a ser la vriable donde se lea desde el prompt
var suma=0; //es la variable donde se van a ir sumando los numeros ingresados por el usuario
while(numero!=0){ //preguntamos si el número leído es distinto de 0, si es igual a 0 se termina el ciclo.
    numero = Number(prompt("ingrese un número (0 para salir)")); //leer número
    suma=suma+numero; //sumamos al total 
    //es lo mismo que suma+=numero; 
} 
alert("la suma es " + suma); //mostamos el resultado

//------------------------------------------------------------------------------------------------------------
var palabra="";                                 //aqui vamos a guardar la palabra que ingrese el usuario

while(palabra!="chao"){                         //si la palabra leida es chao, se sale del ciclo
    palabra = prompt("ingrese palabra");        //se guarda la palabra ingresada por el usuario
    if(palabra=="hola"){                        //es la palbra "hola?"
        alert("hola que tal");
    }else if(palabra=="chao"){                  //es la palabra "chao"?
        alert("adios!!");
        break;
    }else{                                      //la palabra no es ni "chao" ni "hola"?
        alert("no entiendo");
    }    
}
alert("fin");
//------------------------------------------------------------------------------------------------------------
var sumaNotas=0;                                    //acumulador, para sumar todas las notas
var contadorNotas=0;                                //contador, para contar la cantidad total de notas
var nota;                                           //aqui se guardara lo que  ingrese el usuario

while(nota!=0){
    nota=Number(prompt("ingrese una nota (0 para salir)"));
    if(nota!=0){
        sumaNotas+=nota;    //es lo mismo que sumaNotas=sumaNotas+nota;
        contadorNotas++;   //esto es lo mismo que contadorNotas=contadorNotas+1;
    }
}
var promedio = sumaNotas/contadorNotas;
alert("promedio=" + promedio);
//--------------------------------------------------------------------------------------------------------------





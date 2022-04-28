//declaracion de variables (números)
/*
este es
un comentario
de varias líneas
*/
var edad=43;
var decada = 10;

edad=44;
edad=45;
edad=100;
edad=0;
edad=-5;

edad = decada;//asgnar el valor 10 (contenido en decada)  a la variable edad
edad = decada + 5;// le asigno el resultado de 10+5 (10 es lo que contiene la variable década)
edad = edad + 1; //le sumo 1 a si mismo
edad = decada*5; //le asigno 50 5*10 (porque decada aun vale 10)
edad = decada*6+20; //asigna 80
edad = (decada*6)+20; //asigna 80
edad = decada*(6+20);//asigna 260
//---------------------------------------------------------------------------------------------------
//variables de tipo texto
var nombre = "Denis";
var apellido = "Pacheco";
var nombreCompleto = nombre + " " + apellido;
//--------------------------------------------------------------------------------------------------
//variables de tipo booleano
var sinceridad = true;
var maldad = false;
var calculo = 5 < 4; //(retorna el resultado de la operacion mayor que)
//------------------------------------------------------------------------------------------------
//contantes
const valor = 10;
const PI = 3.14;
//-------------------------------------------------------------------------------------------------
//uso de la consola
console.log("hola mundo!!!!");
var agnoActual = 2022;
console.log("el año actual es "+ agnoActual);

var pago = 10000;
console.log(pago);
pago=20000;
console.log(pago);
pago=50000;
console.log(pago);
//-------------------------------------------------------------------------------------------------
//interactividad con alert y prompt
//alert("cómo estás?");
//alert("su pago es de: " + pago );
//prompt("cómo estás?");
//-------------------------------------------------------------------------------------------------
//ejercicio 1 - preguntar como estas y devolver respuesta al usuario
//var respuesta = prompt("cómo estás");
//alert("la respuesta fue: " +respuesta );
//console.log("la respuesta del usuario fue:" + respuesta);
//ejercicio 2 - preguntar el año de nacimiento y devolver la edad
var AgnoNacimiento = prompt("Ingrese su año de nacimiento");
var edad =  2022 - AgnoNacimiento;
var mayorEdad = Number(AgnoNacimiento) +18;
alert("Su edad es:"  +  edad);
alert("Ud cumplio 18 años en: " + mayorEdad);










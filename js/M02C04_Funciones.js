//FUNCIONES
//----------------------------------------------------------------------------------------------------------
//esto es una funcion  
function miPrimeraFuncion(){
    alert("esta es mi primera función");
}
//
function happyBirthday(){
    console.log("cumpleaños feliz");
    console.log("que los cumplas feliz");
    console.log("feliz cumpleaños Paula");
    console.log("Que los cumplas feliz");
}

function happyBirthdayConNombre(Nombre){
    console.log("cumpleaños feliz");
    console.log("que los cumplas feliz");
    console.log("feliz cumpleaños " + Nombre);
    console.log("Que los cumplas feliz");    
}

function cuadrado(numero){
    var resultado=numero*numero;
    return resultado;
}
//definicion de potencia
//returna base elevado al exponente
// 2 elevado a 3 = 2*2*2 =8
//4 elveado a 2  = 4*4 = 16 
// 3 elvado a 4= 3*3*3*3 =81
//2 * 10 = 2*2*2*2*2*2*2*2*2*2 = 1024
function potencia(base,exponente){
    var resultado=1;
    var contador=0;
    while(contador<exponente){ //la condicion de salida es que el contador llegue al exponente (o sea contador>=exponente))
        resultado=resultado*base;
        contador++;
    }
    return resultado;
}
var varExterna=5;

//ejemplos de scope de variables
function test(par){
    let var1=2;
    console.log(par); 
    console.log(var1);
    console.log(varExterna);
}


var par=3;
console.log(test(par));


//CODIGO EJECUTABLE
//------------------------------------------------------------------------------------------------------------
var pot = potencia(3,4);
console.log("3 elevado a 4 es: " + pot);
var pot2 =potencia(2,11);
console.log("2 elevado a 11 es: " + pot2);
console.log("4 elvado a 7 es:"+ potencia(4,7));


/* miPrimeraFuncion();
miPrimeraFuncion();
miPrimeraFuncion();
miPrimeraFuncion();  */

var contador=0;
while(contador<0){
    miPrimeraFuncion();
    contador++;
}
/* esto es ineficiente

console.log("cumpleaños feliz");
console.log("que los cumplas feliz");
console.log("feliz cumpleaños Paula")
console.log("Que los cumplas feliz");

console.log("cumpleaños feliz");
console.log("que los cumplas feliz");
console.log("feliz cumpleaños Paula")
console.log("Que los cumplas feliz");

console.log("cumpleaños feliz");
console.log("que los cumplas feliz");
console.log("feliz cumpleaños Paula")
console.log("Que los cumplas feliz");
 */

//li mismo pero optimo
happyBirthday();

var nombre="Alexis";

happyBirthdayConNombre("Erick");
happyBirthdayConNombre("Luis");
happyBirthdayConNombre("Kathy");
happyBirthdayConNombre(nombre);
var valor = Math.pow(2,3);
console.log(valor);
console.log(cuadrado(5));
console.log(cuadrado(6));
console.log(cuadrado(10));
console.log(cuadrado(-2));




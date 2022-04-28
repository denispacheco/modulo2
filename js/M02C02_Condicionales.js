var nombreGato = "misifus";
var numTelefono = 123123123;
var mayorEdad = true;

var edad = prompt("Ingrese su edad");

if (edad>=18) {
    alert("Ud. es mayor de edad");
}else{    
    let edadFaltante=18-edad;    
    alert("Ud. es menor de edad, te faltan "+edadFaltante+" Años");
}

//3<5 (true)
//4>=4 (true)
//4>4 (false)
//4==4 (true)
//4=="4" (true)
//4==="4" (false,son de distinto tipo)

var numero1=5;
var numero2="5";

if(numero1==numero2){
    alert("son iguales (1)!!!");
}

if(numero1===numero2){
    alert("son iguales (2)!!!");
}
//multievaluacion

var respuesta = prompt("cuanto  es  1+1? :A) 3 - B)5 - C)0 - D)2");

if (respuesta=="A"){
    alert("respuesta incorrecta");
}else if(respuesta=="B"){
    alert("respuesta Incorrecta");
}else if(respuesta=="C"){
    alert("respuesta Incorrecta");
}else if(respuesta=="D"){
    alert("respuesta Correcta!!!!!!!!!!!!!!!!!!");
}else {
    alert("debe ingresar una alternativa entre A y D")
}

//desafio de las operaciones matematicas
var num1 = prompt ("ingrese primer numero");
var num2 = prompt ("ingrese segundo numero");
var eleccion = prompt ("escoga opcion : suma, resta, division, multiplicacion");
if (eleccion == "suma" ){
    let suma = Number(num1) + Number(num2);
    alert ("resultado de la suma: " +suma);
}else if(eleccion == "resta"){
    let resta = Number(num1) - Number(num2);
    alert("El resultado de la resta es : " +resta);
}else if(eleccion == "division"){
    let division = Number(num1) / Number(num2);
    alert("El resultado de la división es : " +division);
}else if(eleccion == "multipliacion"){
    let multipliacion = Number(num1) * Number(num2);
    alert("El resultado de la resta es : " +multipliacion);
}else{
    alert("debe ingresar lo solicitado");
}
//---------------------------------------------------------------------------------------
var num1 = Number(prompt ("ingrese primer numero"));
var num2 = Number(prompt("ingrese segundo numero"));
var eleccion = prompt ("escoga opcion : 1)suma, 2)resta, 3)division, 4)multiplicacion");
if (eleccion == "1" ){   
    alert ("resultado de la suma: " +(num1+num2));
}else if(eleccion == "2"){   
    alert("El resultado de la resta es : " +(num1-num2));
}else if(eleccion == "3"){   
    alert("El resultado de la división es : " +(num1/num2));
}else if(eleccion == "4"){   
    alert("El resultado de la multiplicacion es : " +(num1*num2));
}else{
    alert("debe ingresar lo solicitado");
}

//---------------------------------------------------------------------------------------
//condiciones simultaneas
var dia = prompt("indique el día de la semana 1-7")
var hora = prompt("indique la hora (0-24)");

if (dia<=5 && hora>7 && hora<19){
    alert("es hora de trabajo");
}

//----------------------------------------------------------------------------------------
var mascota = prompt("que animal es tu mascota? 1)perro - 2)gato");
var color = prompt("que color es tu mascota? 1)claro - 2)oscuro");

//1) dejarlo pasar si su mascota no es gato

/* if(mascota!=2){
    alert("puedes pasar");
}else{
    alert("deja la mascota afuera!!");
} */

//2): dejarlo pasar si las mascota es un perro y ademas es claro
if(mascota!=2  && color==1 ){
    alert("puedes pasar")
}else{
    alert("deja la mascota afuera!!");
}


//-------------------------------------------------------------------------------------------------
var  precioPan=prompt("ingrese el valor del kilo de pan");
var  resultado="";
/* if(precioPan>1500){
    resultado="el pan está caro";
}else{
    resultado="el pan está barato";
} */
//forma alternativa al if
 resultado = precioPan>1500 ?  "el pan está caro" : "el pan está barato";
alert(resultado);
//-------------------------------------------------------------------------------------------------
//optimizado 1
var  precioPan=prompt("ingrese el valor del kilo de pan");
alert(precioPan>1500 ?  "el pan está caro" : "el pan está barato");
//-------------------------------------------------------------------------------------------------
//optimizado 2
alert(prompt("ingrese el valor del kilo de pan")>1500 ?  "el pan está caro" : "el pan está barato");

//------------------------------------------------------------------------------------------------
//conversion codigo de matoria de edad a operador ternario
edad= prompt("Indique su edad");
alert(edad>=18 ? "Ud. es mayor de edad" : "Ud. es menor de edad");
//------------------------------------------------------------------------------------------------
//lados de una caja (alexis menco)
var horizontal = prompt("Ingrese el tamaño de la caja horizontal");
var vertical = prompt("Ingrese el tamaño de la caja vertical");
var resultado = "";

resultado = horizontal === vertical ? "Si es completamente cuadrada":"No es un cuadrado exacto"

alert(resultado);


//------------------------------------------------------------------------------------------------
//ingresar dos números distintos e indicar cual es el mayor (matias)
var num1 = prompt("ingresa el primer numero");
var num2 = prompt("ingresa el segundo numero");
if(num1===num2)
    alert("son iguales");    
else if(num1>num2)
    alert("el numero mayor es : "+num1);
else if(num2>num1)
    alert("el numero mayor es : "+num2);
//------------------------------------------------------------------------------------------------
var num1 = prompt("ingresa el primer numero");
var num2 = prompt("ingresa el segundo numero");
alert(num1 > num2 ? "el mayor es el primer número":"el mayor es el segundo número");
//con igualdad
alert(num1 > num2 ? "el mayor es el primer número":(num2>num1?"el mayor es el segundo número":"son iguales"));

//------------------------------------------------------------------------------------------------
//operador ternario anidado
edad<=18  ?  "estudiante": (edad>65 ? "jubilado":"trabajador")


//modulo------------------------------------------------------------------------------------------
//suma +
//resta -
//multiplicaion *
//division /
//modulo % 

// 16 % 5 = 1
// 20 % 6 = 2 
// 2 % 2  = 0
// 3 % 2  = 1
// 4 % 2  = 0
// 5 % 2  = 1
// 6 % 2  = 0
//7 % 2   = 1
 






















function escribir(){
    console.log("texto de ejemplo");
}


var palabra  =  "Hola";
var palabra2 = "idfhdf gh dfighighfi ghfdi fihdifgh digh fid ighdifug";

//escribir();
//Math.pow(2,4);

console.log(palabra.length);
console.log("la primera letra de la palabra Hola es:" + palabra[0]);
console.log("la segunda letra de la palabra hola es:" + palabra[1]);
console.log("la {ultima letra de la palabra Hola es:" + palabra[3]);
console.log("la letra en la posicion 4 de la palabra Hola es:" + palabra[4]); //undefined si la palabra tiene 4 letras

var largoPalabra = palabra2.length;
console.log("la ultima letra es: " + palabra2[largoPalabra-1]);
//en un solo paso
console.log("ultima letra: " + palabra2[palabra2.length-1]);


//quiero guardar los nombre de los alumnos del curso---------------------------------------------------------
//version 1, sin arreglos
var Alumno1="Paula";
var Aliumno2="Alexis";
var Alumno3="Katty";
var alumno4="Sandra";
var Alumndfdfo5="Fernando";

console.log("el aluno 3 es:" + Alumno3);

//version arreglos
let Alumnos=["Paula","Alexis","Katty","Sandra","Fernando"];

console.log("la cantidad total de alumnos es: " + Alumnos.length);
console.log("el segundo alumno es:" + Alumnos[1]);
console.log("el primero alumno es:" + Alumnos[0]); 
console.log("El último alumno es:" + Alumnos[Alumnos.length-1]);    //siempre el ultimo elemento es arreglo.length-1


//modificación de un elemento del arreglo----------------------------------------------------------------------
console.log("el tercer alumno antes del cambio es:" + Alumnos[2]); 
Alumnos[2]="Matias";                                                //reemplazo el tercer elemento del arreglo
console.log("el tercer alumno despues del cambio es:" + Alumnos[2]); 

//agregar elementos al final del arreglo
console.table(Alumnos);
Alumnos.push("Clemente");
console.table(Alumnos);
//agregar dos elementos (se pueden agregar mas de dos)
Alumnos.push("Guillermo","Alejandra");  
console.table(Alumnos);

//sacar el ultimo elelemtno con pop
console.log("antes del pop------------");
console.table(Alumnos);
let ultimo = Alumnos.pop();
console.log("despues del pop--------------");
console.table(Alumnos);
console.log("el elemento sacado es:" + ultimo);


//sacar el primer elelemtno con shift
console.log("antes del shift------------");
console.table(Alumnos);
let primero = Alumnos.shift();
console.log("despues del shift--------------");
console.table(Alumnos);
console.log("el elemento sacado es:" + primero);

//indexof
var texto="mi primer index";
var posicion=texto.indexOf("p");
console.log("la posicion del texto es:"  + posicion); //3
console.log("la posicion del teto es: "+  texto.indexOf("primer")); //3
console.log("la posicion del teto es: "+  texto.indexOf("index")); //10
console.log("la posicion del teto es: "+  texto.indexOf("pro"));//-1
console.log("la posicion del teto es: "+  texto.indexOf("i"));//1

//index of arreglos
Alumnos=["Paula","Alexis","Katty","Sandra","Fernando"]; //reescribi el arrelgo

console.log("la posicion de Alexis en el arreglos es: " + Alumnos.indexOf("Alexis")); //1
console.log("la posicion de Ferando en el arreglo es:" + Alumnos.indexOf("Fernando"));//4
console.log("la posicion de Denis en el arreglos es:" + Alumnos.indexOf("Denis"));//-1

//ejemplo de index of, buscar alumno

var busqueda = prompt("Ingrese el nombre del alumno");

if (Alumnos.indexOf(busqueda)>=0){
    alert("si está!");
}else{
    alert("no está");
}

//crear una caopia de arreglo original (slice)
var CopiaAlumnos=Alumnos.slice();
var CopiaParcialAlumnos=Alumnos.slice(1,4);
console.log("copia---------------");
console.table(CopiaAlumnos);
console.log("copia parcial---------------");
console.table(CopiaParcialAlumnos);

//eliminar elementos desde cualquier parte

console.log("antes de eliminar");
console.table(CopiaAlumnos);
var Eliminados=CopiaAlumnos.splice(1,3);
console.table(CopiaAlumnos);
console.log("elementos eliminados");
console.table(Eliminados);


//eliminar un solo elemento en una posicion de enmedio
CopiaAlumnos=Alumnos.slice();
console.log("antes de eliminar un elemento");
console.table(CopiaAlumnos);
var eliminado = CopiaAlumnos.splice(2,1);
console.log("despues de eliminar un elemento");
console.table(CopiaAlumnos);
console.log(eliminado);
CopiaAlumnos.splice


//transformar arreglo en texto
console.log(Alumnos.join("-"));

var TextoAlumnos="Pedro juan digo denis pablo";
var arregloALumnos=TextoAlumnos.split(" ");
console.table(arregloALumnos);






















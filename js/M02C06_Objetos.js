//ejemplo
var FigurasGeometricas = ["triangulo","cuadrado","rectangulo","trapecio","pentágono","trapezoide"];

var segundoElemento = FigurasGeometricas[1];
var ultimoelemento =  FigurasGeometricas[4];
//alternativa
var ultimoElemento2 = FigurasGeometricas[FigurasGeometricas.length -1];

console.log(FigurasGeometricas[0]);
console.log(FigurasGeometricas[1]);
console.log(FigurasGeometricas[2]);
console.log(FigurasGeometricas[3]);
console.log(FigurasGeometricas[4]);
console.log(FigurasGeometricas[5]);

console.log("---------------------");
//(inicializacion;condicion;incremento)
for( i = 0 ; i < FigurasGeometricas.length  ; i++ ){
    console.log(FigurasGeometricas[i]);
}
//recorrido inverso
for(i=FigurasGeometricas.length-1;i>=0;i--){

}
/* //pedir tres lados del triangulo
var ladosTriangulo=[];
//var lado=prompt("ingrese lado triangulo");
for(i=0;i<3;i++ ){
    ladosTriangulo.push(prompt("inhrese un lado del triangulo"));
}
var perimetro=0;
for (i=0;i<ladosTriangulo.length-1;i++){
    //perimetro + =Number(ladosTriangulo[i]);
    console.log(ladosTriangulo[i]);
}
alert(perimetro);
 */

//fin del for
/*
FigurasGeometricas.forEach((a)=>{
    console.log(a);
})
*/



//declaracion de un arreglo vacío:
let miArreglo=[];
//declaración de un objeto vacío:
let miObjeto={};

//declaracion de una variable
let miVaribale="hola";

//declaracion de u arreglo con elementos
let miArreglo2=["hola","chao","que tal"];

//declaracion de un  objeto con propiedades:
let miObjeto2 = {
    nombre:"Denis",
    edad:43,
    alumno: false
}
//desafío: crear un objeto que represente un triangulo
let triangulo={
    a:2,
    b:3,
    c:3
}

//crear un objeto que represente un punto en el plano cartesiano
let planoCar = {
    x:3,
    y:5
}

//crear un objeto que represete un auto:
let objetoAuto={
    marca:"ford",
    modelo:"mustang",
    color:"azul",
    anio:2012,  
    motor:4,
    pulso:2000,
    velocidad:300,
    kilometraje:0,
    neblineros:true
}

//llamar a un elemento del arreglo miArreglo2 (segundo elemento)
miArreglo2[1]="hasta luego";

//llamar a un elemento de un objet , objetoAuto y modificarlo
objetoAuto["color"]="rojo";
console.log(objetoAuto);
//otra forma de acceder a un elemento es con la notación de punto y modificarlo:
objetoAuto.color="verde";
console.log(objetoAuto);

//mostrar en pantalla sólo la marca y modelo del objeto auto (mediante ambas notaciones)
console.log("La marca del auto es "  + objetoAuto.marca);
console.log("El modelo del auto es "  + objetoAuto.modelo);

//objeto que describe una casa
let Casa={
    color:"blanca",
    cantidadHabitaciones:3,
    cantidadBanios:2
} 

//acceder a los elementos
console.log("El color de mi casa es " + Casa.color);
console.log("El color de mi casa es " + Casa["color"]);

//modificar
Casa.color="Verde";
Casa["color"]="Verde";

//agregar una  propiedad:
Casa.metrosCuadrados=75;
Casa["Patio"] = true;

console.log(Casa);
console.table(Casa);

//------------------------------------------------------------------------------------------------
triangulo ={
    a:2,
    b:3,
    c:3,    
    perimetro: function (){
        return this.a+this.b+this.c;
    }
}

console.log(triangulo)
console.log(triangulo.perimetro());

//re-definicion de auto
let auto = {
    marca:"mitsubishi",
    modelo:"montero",
    color:"negro",
    puertas:5,
    escibirMarca:function(){
        console.log(this.marca);
    },
    escribirTodosLosDatos:function(){
        console.log(this.marca + ", " + this.modelo+ ", " + this.color);
    }
}

console.log(auto.marca);
console.log(auto.modelo);
auto.escibirMarca();
auto.escribirTodosLosDatos();

//objeto con propiedades y funciones que describa un cuadrilatero
var cuadrilatero = {
    lado1:2,
    lado2:3,
    perimetro:function(){
        return  this.lado1*2 + this.lado2*2;
    },
    area:function(){
        return this.lado1*this.lado2;
    }
}

//----------------------------------------------
//ejemplo de arreglo con datos de  distinto tipo
//var miArreglo3 = ["uno",2,true,"hola que tal"];
//segundo elemento es:
//console.log(miArreglo3[3]);

var miArreglo4 =  ["uno",2,true,cuadrilatero];

miArreglo4[0]  //"uno"
miArreglo4[1]  // 2
miArreglo4[2]  // true
miArreglo4[3]   // cuadrilatero 
miArreglo4[3].lado1 //2
miArreglo4[3].lado2 //3
miArreglo4[3].perimetro() //

//
var cuadr1= {
    lado1:10,
    lado2:20
}
var cuadr2={
    lado1:5,
    lado2:6
}
var cuadr3= {
    lado1:8,
    lado2:4
}

var miArreglo5=[cuadr1, cuadr2, cuadr3];

 var miArreglo5Directo = [
        {lado1:10, lado2:20},
        {lado1:5, lado2:6},
        {lado1:8, lado2:4}
 ]

 miArreglo5Directo[0]
 miArreglo5Directo[1].lado2
 miArreglo5Directo[2].lado1


 //definir un arreglo de objetos, donde cada objeto represente una persona (rut,nombre y apellido)

 var personas = [
        {rut:"15232522-9",nombre:"Juanito",apellido:"perez"},
        {rut:"64532154-4",nombre:"Bruno",apellido:"fuenzalida"},
        {rut:"87687687-2",nombre:"Alejandra",apellido:"Ruiz"}
 ]

 console.log(personas[1].apellido)

 console.log(personas);
 console.table(personas);

//-------------------------------------------------------------------------------------------------

 auto = {
     marca:"mazda",
     modelo:"3",
     anio:2020,
     color:"azul"
 }
console.log("---------------------------")
 //recorre y escribe identificadores de las propiedades
 for(let elemento in auto){
    console.log(elemento);
 }
 //recorre y escribe valores de las propiedades
 for(let elemento in auto){
     console.log( auto[elemento] );
 }


 for(let elemento in auto){
    console.log(elemento +" = "+ auto[elemento]);
 }
 //-------------------------------------------------------------------------------------------------
 //crear un objeto pokemon que contenga las propiedades que lo definen:
 //numero
 //nombre 
 //tipo : arreglo
 //2 atauqes: funciones

 var pokemonAlexis = {
    numero: 6,
    nombre: "Charizard",
    tipo: ["fuego"],
    llamarada:function(){
        console.log("Llamarada");
    },
    ataqueAereo:function(){
        console.log("Ataque Aéreo");
    }

}

console.log(pokemonAlexis)
console.log(pokemonAlexis.llamarada());
//--------------------------------------------------------------------------
var pokemonAlexisC={
    numero:1,
    nombre:"Bulbaasour",
    tipo:["planta","veneno"],
    latigoCepa:function(){
        console.log("Látigo cepa!");
    }

}
//--------------------------------------------------------------------------
var pokemonGuillermo={
    numero:25,
    nombre:"pikachu",
    tipo:["mostruo","espacial","alienigena"],
    ataque1: function(){console.log("lanza fuego");},
    ataque2: function(){console.log("Hipnotizador");}
}
//---------------------------------------------------------------------------
poquemonFernando ={
    numero:25,
    nombre:"pikachu",
    tipo:"electrico",
    ataques:[{
        ataque:"inpack",
        potencia:10,
    },{
        ataque:"thunderbolt",
        potencia:20,
    }
    ]
}
console.log(poquemonFernando)
//---------------------------------------------------------------------------
let pokeAlenjandra={
    nombre: "Charmander",
    numero: 004,
    tipo: ["fuego"],

    lanzallamas:function(){
        console.log("Lanzallamas");
        
    },
    nitroCarga:function(){
        console.log("Nitrocarga");
    }
}
//---------------------------------------------------------------------------
let pokemonBruno = {
    numero: 25,
    nombre: "pikachu",
    tipo: ["electrico"],
    impactrueno: function() {
        console.log("Impactrueno");
    }
}

pokemonBruno.impactrueno();


loHasVisto? "SI":"NO"



function generarArreglo(texto,numero){
    let arreglo = []

    return arreglo
}

// generarArreglo(indice,3)
/*
    [
        {indice: 1},
        {indice: 2},
        {indice: 3}
    ]
*/
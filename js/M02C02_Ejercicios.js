/* let x=10;
let y="a";
console.log("el valor de y===b es igual a:" );
console.log(y==='b');
console.log("el valor de x>=10 es igual a: ");
console.log(x>=10);
console.log("el valor de la operacion total y==='b' || x >= 10 es iagual a:");

console.log((y==="b" || x >= 10)) */

//1)y==="b" ->false
//2)x >= 10  ->true
//1) || 2)  -> true


let x = 3;
let y = 8;

let resultado = !(x == "3" || x === y) && !(y !== 8 && x <= y);
//console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y));

//1) x == "3"  -> V
//2)x===y      -> F
//3)x == "3" || x === y -> V
//      V    ||    F 
//4)!(x == "3" || x === y)  ->F
//  !V   

//5) y!==8  -> F
//6) x <= y -> V
//7)y!==8 && x<=y
//   F  &&   V   ->  F
//8) !(y !== 8 && x <= y) ->V
//  !F

// !(x == "3" || x === y) && !(y !== 8 && x <= y)->
//           4)           &&       8)
//           F            &&      V
//final  = F

let str = "";
let msj = "jaja!";
let esGracioso = "false";
//"false"  no es lo mismo que false
console.log(str || msj);
console.log(esGracioso);
console.log((str || msj) && esGracioso);

console.log(!((str || msj) && esGracioso));


//1) str || msj ->  
//    F  ||  V  ->  V
//2) esGracioso ->   V
//3)(str || msj) && esGracioso->F
//       V       &&     F   
//!((str || msj) && esGracioso);->V
//!F




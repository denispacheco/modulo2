

let obj={
    p:"hola",
    a:123
}

console.log(obj.p);
console.log(obj["p"]);


for (o in obj){
    console.log(obj[o]);
}


let obj2={    
    uno:"1",
    dos:"dos"
}

obj2["texto"]=3;
console.log(obj2);
console.dir(obj2);
console.table(obj2);
console.log(JSON.stringify(obj2));
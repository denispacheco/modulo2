//ejercicio guia 2.1 - triplicar un número
function triplicador(numero){
    return 3*numero;
}
function multiplicador(numero1 , numero2){
    //console.log("los valores son " + numero1 + " y " + numero2);
    return (numero1*numero2);
}
//compara dos nunmeros y devuielve el mayor, si son iguales devuelve 0
function comparar(num1,num2){
    if (num1>num2){
        return num1;
    }else if(num2>num1){
        return num2;
    }else{
        return 0;
    }
}
//funcion que calcule el perimetro de un triangulo pasando como parametros los tres lados.
function perimetro(lado1,lado2,lado3){
    return (lado1+lado2+lado3);
}
//funcion factorial
//factorial 5= 5*4*3*2*1 = 1*2*3*4*5 = 120
//factorial de 11=11*10*9*8*7*6*5*4*3*2*1 =39.916.800
function factorial(numero){
    var contador = numero;
    var resultado = 1;

    while(contador != 0){
        resultado*=contador
        contador--;
    }
    return resultado;
    
}

function factorialBruno(num) {
    let contador = 1
    let acum = 1
    while (contador <= num) {
        acum = contador * acum

        contador++;
        //console.log(acum)
    }
    return acum;
}
//factorial recursivo
function factorialEmbrujado(numero){
    if (numero==1){
        return 1;
    }else{
        return numero*factorial(numero-1);
    }
}

//número par o impar
//funcion paridad
function paridad(num){
    if(num%2==0){
        return (num+" Es un numero par");
    }else{
        return (num+" Es un numero impar");
    }
}

//-----------------------------------------------------------------------
//implementar un sistema que le pregunte al usuario que operacion matematica desea realizar
//1.- comprobar paridad de un numero
//2.- calcular el factorial de un número
//3.- calcular el perimetro de un triangulo

//segun las opciones, pedir la cantidad de parametros adecuados para retornale el valor que quiere calcular
//esto en un loop infinito hasta que el usuario elija la opción 0




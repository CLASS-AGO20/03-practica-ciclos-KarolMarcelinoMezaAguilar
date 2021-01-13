export default class App {

    // Función que reciba un numero y entregue su factorial (for)

    factorial(numero){

        let multiplicacion=1;
    for(let i=1; i<=numero; i++){
        multiplicacion=multiplicacion*i;
    }
    return multiplicacion;
}

    // Función que reciba un númer y entregue su equivalente en asteriscos (while)

    convertirAString(numero){

        let asterisco="";
    let i=1
    while(i<=numero){
        asterisco=`${asterisco}*`
        i++
    }
    return asterisco;
}

    // Función que diga entre cuantos números es divisible un número (do while)

    obtenerDivisibles(numero){

        let divisores=0;
        let i=1;
        do{
            if(numero%i===0){
                divisores++;
            }
            i++
        } while (i<=numero);
        return divisores;
    }


    // Función que eleve un número a la N y regrese el resultado (cualquiera)

    elevar(numero, potencia){

        let resultado=1;
    for(let i=1; i<=potencia;i++){
        resultado=resultado*numero;
    }
    return resultado;
}

}

let app = new App();

// F1

console.log(app.factorial(5));
console.log(app.factorial(3));
console.log(app.factorial(1));

// F2

console.log(app.convertirAString(5));

// F3

console.log(app.obtenerDivisibles(6));
console.log(app.obtenerDivisibles(4));
console.log(app.obtenerDivisibles(1));

// F4

console.log(app.elevar(3, 4));
console.log(app.elevar(5, 2));
console.log(app.elevar(2, 3));
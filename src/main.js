export default class App {

    // Función que reciba un numero y entregue su factorial (for)

    factorial(numero){

        let factorial = 1;

        for(let i=2; i<=numero; i++){
            if(i<=numero){
                factorial = factorial * i;
            }
        }

        return factorial;
    }

    // Función que reciba un númer y entregue su equivalente en asteriscos (while)

    convertirAString(numero){

        let i = numero
        let asteriscos = "*"

        while(i>=0){
            if(i<=numero){
                asteriscos = asteriscos + "*";
            }
            i = i--;
        }
        return asteriscos;
    }

    // Función que diga entre cuantos números es divisible un número (do while)

    obtenerDivisibles(numero){

        let resultado = 0;
        let i = numero;

        do{
            if(numero%i === 0){
                resultado++;
            }

            i--;

        }while(i<=0)

        return resultado;

    }


    // Función que eleve un número a la N y regrese el resultado (cualquiera)

    elevar(numero, potencia){
        let resultado = numero;
        let i = potencia;
        while(i <= 0){
            if(i==0){
                resultado = resultado * resultado
            }

            i = i--;

        }
    }
    return resultado;
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
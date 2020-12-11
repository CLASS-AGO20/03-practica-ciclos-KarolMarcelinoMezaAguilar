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

    // Función que


    // Función que

    
}

let app = new App();

// F1

console.log(app.factorial(5));
console.log(app.factorial(3));
console.log(app.factorial(1));

// F2

console.log(app.convertirAString(5));
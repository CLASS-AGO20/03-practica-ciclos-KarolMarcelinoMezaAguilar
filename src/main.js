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

    // Función que


    // Función que


    // Función que

    
}

let app = new App();

// F1

console.log(app.factorial(5));
console.log(app.factorial(3));
console.log(app.factorial(1));

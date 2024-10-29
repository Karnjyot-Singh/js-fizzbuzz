// Ciclo di numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Controlla se i è un multiplo di 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Stampa "FizzBuzz"
    // Controlla se i è un multiplo di 3
    } else if (i % 3 === 0) {
        console.log("Fizz"); // Stampa "Fizz"
    // Controlla se i è un multiplo di 5
    } else if (i % 5 === 0) {
        console.log("Buzz"); // Stampa "Buzz"
    // Altrimenti se i non è un multiplo di 3 o 5
    } else {
        console.log(i); // Stampa solo il numero
    }
}
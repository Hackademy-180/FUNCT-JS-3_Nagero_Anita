// Selfwork Funzioni 3
// Scrivi una funzione che dato un numero intero positivo (massimo 9999) conti da quante cifre è formato.

// Esempio:
// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande





function numeroCifre(number){


 if (typeof number !== 'number' || !Number.isInteger(number) || number < 0) {
    console.log("Input non valido: Inserisci un numero intero positivo.");
    //Se l'input non è valido, stampiamo un messaggio di errore chiaro.
    return; 
    
    // Termina l'esecuzione della funzione qui

  }


  //numero esorbitante 
if(number > 9999) {
    console.log("Numero troppo grande!");

    return;
}



    const numeroStringa = String(number);
    const numeroCifre = numeroStringa.length;

//AVVIO:

    if( numeroCifre === 1) {

        console.log(`${number} -> 1 cifra`);
    }

    else if (numeroCifre === 2){
        console.log(`${number} -> 2 cifre`);


    } else if (numeroCifre === 3) {
        console.log(`${number} -> 3 cifre`);
    } else if (numeroCifre === 4) {
        console.log(`${number} -> 4 cifre`);
    } else {
        console.log("Errore sconosciuto nel conteggio delle cifre!");
    }
}




let numero = Number(prompt("inserisci numero (1,2 0 5 cifre massimo.); : "));
numeroCifre(numero)





// Input: 9 → Output: 1 cifra


// Input: 99 → Output: 2 cifre


// Input: 12000 → Output: Numero troppo grande


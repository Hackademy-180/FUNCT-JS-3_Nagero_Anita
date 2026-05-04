<!-- crea funzione con funzi. al interno a capire da quante cifre è composto il numero -->



function countNumber(num){

    if(num <  10){
        return `1 cifra`
    }else if(num < 100){
        return `2cifre`
    }else if(num < 1000){
        return `3 cifre`
    }else if (num < 10000){
        return `4 cifre`
    }else{

        return`numero troppo grande`
    }
}

console.log(countNumber());


console.log("hi");

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console.

*/


//Snack 1

//creo il mio array con due proprietà 

const bikes = [
    {
        bikeNames: "Bianchi",
        weight: 20
    },
    {
        bikeNames: "Atala",
        weight: 34
    },
    {
        bikeNames: "Colnago",
        weight: 28
    },
    {
        bikeNames: "Pinarello",
        weight: 25
    },
    {
        bikeNames: "De rosa",
        weight: 5
    }
];

// dovrò ciclare all'interno del mio array e valutare il peso di ogni bici
// per dopo trovare quello che pesa meno


// questo ciclo inutile
for (let key in bikes) {
    console.log(bikes[key]);

}

// proviamo con il classico ciclo
// creo un array con tutti i pesi
let bikesWeight = [];
for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    console.log(bike.weight);
    bikesWeight.push(bike.weight);
}

console.log(bikesWeight);

// trovo il numero minore e lo salvo in una variabile
const SmallWeight = Math.min(...bikesWeight);
console.log(SmallWeight);

// provo a loggare in console la bici che ha questo minore peso
for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];

    if (bike.weight === SmallWeight) {

        console.log(`La bibi che pesa meno è ${bike.bikeNames}`);

    } else {

    }
}
console.log("hi");

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

*/

//creo il mio array con due proprietà 

const bikes = [
    {
        bikeNames: "Bianchi",
        weight: 20
    },
    {
        bikeNames: "Atala",
        weight: 4
    },
    {
        bikeNames: "Colnago",
        weight: 28
    },
    {
        bikeNames: "Pinarello",
        weight: 10
    },
    {
        bikeNames: "De rosa",
        weight: 38
    }
];

// dovrò ciclare all'interno del mio array e valutare il peso di ogni bici
// per dopo trovare quello che pesa meno

// questo ciclo inutile
for (let key in bikes) {
    console.log(bikes[key]);
}

// creo un array vuoto che andrò a popolare con tutti i pesi
let bikesWeight = [];
// creo delle variabili utili che dopo il ciclo sarranno dei valori specifici
let SmallWeight = 0;
let bikeSmallWeight = "";
// proviamo con il classico ciclo
for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];
    console.log(bike.weight);
    bikesWeight.push(bike.weight);

    // trovo il numero minore e lo salvo nella variabile che ho creato
    SmallWeight = Math.min(...bikesWeight);
    console.log(SmallWeight);

    //condizione per trovare la bici che pesa meno
    if (bike.weight <= SmallWeight) {
        // console.log(`La bibi che pesa meno è ${bike.bikeNames}`);
        bikeSmallWeight = bike.bikeNames
    } else {

    }
}

console.log(bikesWeight);

console.log(SmallWeight);

console.log(`La bibi che pesa meno è ${bikeSmallWeight}`);


/* // provo a loggare in console la bici che ha questo minore peso
for (let i = 0; i < bikes.length; i++) {
    const bike = bikes[i];

    if (bike.weight === SmallWeight) {

        console.log(`La bibi che pesa meno è ${bike.bikeNames}`);

    } else {

    }
} */


/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
e stampiamo tutto in console.
*/

// creo il mio array
const footballTeams = [
    {
        teamName: "Milan",
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        teamName: "Inter",
        pointsMade: 0,
        foulsSuffered: 0
    },
    {
        teamName: "Juventus",
        pointsMade: 0,
        foulsSuffered: 0
    },
]

// questo ciclo solo per vedere cosa c'è dentro il mio array
for (let key in footballTeams) {
    console.log(footballTeams[key]);
}

// proviamo con il classico ciclo

for (let i = 0; i < footballTeams.length; i++) {
    const team = footballTeams[i];
    team.pointsMade = getRndInteger(1, 100);
    team.foulsSuffered = getRndInteger(1, 100)
}

// ciclo per vedere il risultato
for (let key in footballTeams) {
    console.log(footballTeams[key]);
}

// creo un nuovo array vuoto che andrò a popolare con solo alcune informazioni
let easyFootballTeams = [];
for (let i = 0; i < footballTeams.length; i++) {
    const team = footballTeams[i];
    // occhio qua ho fatto due oggetti per ogni iterazione che è sbagliato
    easyFootballTeams.push({ teamName: team.teamName });
    easyFootballTeams.push({ foulsSuffered: team.foulsSuffered });
}
console.log(easyFootballTeams);





// funzione copiata da w3school per generare un numero a caso tra due numeri compresi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
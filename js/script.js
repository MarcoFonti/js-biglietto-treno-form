// Check
console.log('JS OK');

// Recupero Id del input Nome e Cognome utente
const lastNameField = document.getElementById('lastName');

// Recupero Id dei input Km
const kmsField = document.getElementById('kms');

// Recupero Id della select
const userAgeField = document.getElementById('userAge');

// Recupero bottone 'Genera'
const buttonGenField = document.getElementById('button-generates');

// Recupero bottone 'Annulla'
const buttonCanField = document.getElementById('button-cancel');

// Recupero Id del Nome che verrà messo in pagina
const lastNamePasElement = document.getElementById('lastName-passenger');

// Recopero Id dell'offerta
const offerElement = document.getElementById('offer');

// Recupero Id Carrozza 
const carriageElement = document.getElementById('carriage');

// Recupero Id Codice CP
const codeCpElement = document.getElementById('code-cp');

// Recupero Id costo del biglieto
const priceElement = document.getElementById('price');

/* CONTROLLO VALORI */
console.log(lastNameField, kmsField, userAgeField, buttonGenField, buttonCanField, lastNamePasElement, offerElement, carriageElement, codeCpElement, priceElement);


/* CREO UNA VARIBILE IN BASE AI KM (0.21€ A KM) */
const pricePerkms = 0.21;


/* CREO DUE VARIBILE CON I VARI SCONTI */
let discount20 = 0.20
let discount40 = 0.40


/* CREO UNA VARIBILE PER MANIPOLARLA NELLA CONDIZIONE ALL'EVENTO DEL CLICK */
let offerName = 'Biglietto Standard';


/* AL CLICK SUL BOTTONE GENERA CREO UN EVENTO */
buttonGenField.addEventListener('click', function(){

    
    /* CREO 3 VARIBILE IN CUI METTERO' IL VALORE CHIESTO ALL'UTENTE TRAMITE INPUT GRAZIE AL VALORE DEL VALUE */
    const lastNameValue = lastNameField.value;
    const kmsValue = kmsField.value;
    const userAgeValue = userAgeField.value;


    /* CONTROLLO RISULTATO */
    console.log(lastNameValue, kmsValue, userAgeValue)
    

    /* CREO UNA VARIBILE E GLI ASSEGNO IL PREZZO AL KM * I CHILOMENTRI CHE MI HA INSERITO UTENTE */
    let price = pricePerkms * kmsValue;


    /* SE IL VALORE SCELTO DALL'UTENTE E' IDENTICO CON IL VALUE UNDERAGE   */
    if (userAgeValue === 'underage') {

        /* ALLA VARIBILE OFFERNAME CAMBIO IL MESSAGGIO */
        offerName = 'Offerta del 20%'

        /* ALLA VARIBILE PRICE AGGIUGO LO SCONTO DEL 20% */
        price = price * (1 - discount20);


        /* ALTRIMENTI SE IL VALORE SCELTO DALL'UTENTE E' IDENTICO CON IL VALUE OVER  */
    } else if (userAgeValue === 'over'){

        /* ALLA VARIBILE OFFERNAME CAMBIO IL MESSAGGIO */
        offerName = 'Offerta del 40%'

        /* ALLA VARIBILE PRICE AGGIUGO LO SCONTO DEL 40%*/
        price = price * (1 - discount40);
    }


    /* CONTROLLO LA RISPOSTA */
    console.log (price, offerName);


    /* CREO UNA VARIBILE E RANDOMIZZO IL NUMERO DELLA CARROZZA */
    const carriage = Math.floor(Math.random() * 20) + 1;


    /* CREO UNA VARIBILE E RANDOMIZZO CODICE CP */
    const codeCp = Math.floor(Math.random() * (1000 - 900)) + 900;


    /* CONTROLLO LA RISPOSTA */
    console.log(carriage, codeCp);


    /* STAMPO IN PAGINA */

    /* NOME UTENTE */
    lastNamePasElement.innerText = lastNameValue;
    /* OFFERTA */
    offerElement.innerText = offerName;
    /* CARROZZA */
    carriageElement.innerText = carriage;
    /* CODICE CP */
    codeCpElement.innerText = codeCp;
    /* PREZZO */
    priceElement.innerText = '€' + price.toFixed(2);
})


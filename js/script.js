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

// Valore in Console
console.log(lastNameField, kmsField, userAgeField, buttonGenField, buttonCanField, lastNamePasElement, offerElement, carriageElement, codeCpElement, priceElement);

// Prezzo per Km
const pricePerkms = 0.21;
// Variabile Offerta
let offerName = 'Biglietto Standard';

//Evento dopo il Click
buttonGenField.addEventListener('click', function(){
    // Recupero i valore che ha scelto utente
    const lastNameValue = lastNameField.value;
    const kmsValue = kmsField.value;
    const userAgeValue = userAgeField.value;
    
    console.log(lastNameValue, kmsValue, userAgeValue)
    
    // Calcolo Prezzo
    let price = pricePerkms * kmsValue;

    //Calcolo Sconto
    if (userAgeValue === 'underage') {
        offerName = 'Offerta del 20%'
        price = (price * 20) / 100;
    } else if (userAgeValue === 'over'){
        offerName = 'Offerta del 40%'
        price = (price * 40) / 100;
    }

    console.log (price, offerName);

    // Random numero carozza
    const carriage = Math.floor(Math.random() * 20) + 1;
    // Random numero Codice CP
    const codeCp = Math.floor(Math.random() * (1000 - 900)) + 900;

    console.log(carriage, codeCp);

    //Metto i dati dell'utente nel biglietto
    lastNamePasElement.innerText = lastNameValue;
    
    offerElement.innerText = offerName;

    carriageElement.innerText = carriage;
    
    codeCpElement.innerText = codeCp;
    
    priceElement.innerText = '€' + price.toFixed(2);
})


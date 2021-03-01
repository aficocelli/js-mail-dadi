/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/


// 1 creo array contenente una lista di Mail

var listaMail = ["a.fico@gmail.com", "fico@hotmail.com", "alfred@yahoo.com"];

var mailVerificata;

// 2 creo variabile e prompt per richiedere mail all'utente

var mailUtente = prompt("Inserisci la tua mail");



// 3 verifico che la mail sia presente in lista

for ( var i = 0; i < listaMail.length; i++ ) {

  // creo if per vedere se la mail inserita è quella presente in lista

  if ( mailUtente === listaMail[i] ) {

    mailVerificata = mailUtente;

  }

}

if ( mailVerificata == mailUtente ){
  alert("la mail è corretta");
} else{
  alert("mail non trovata");
}


// document.getElementById("mail").


// 4 stampo messaggio sull'esito

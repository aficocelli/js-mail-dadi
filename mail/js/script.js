/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/


// 1 creo array contenente una lista di Mail

var listaMail = ["a.fico@gmail.com", "fico@hotmail.com", "alfred@yahoo.com"];

var mailVerificata;

// 2 creo variabile e prompt per richiedere mail all'utente

var mailUtente = prompt("Inserisci la tua mail");

document.getElementById("mailinserita").innerHTML = mailUtente;

// 3 verifico che la mail sia presente in lista

for ( var i = 0; i < listaMail.length; i++ ) {

  // creo if per vedere se la mail inserita è quella presente in lista

  if ( mailUtente === listaMail[i] ) {

    mailVerificata = mailUtente;

  }
}

// creo if per tirar fuori variabile da ciclo for

if ( mailVerificata == mailUtente ){

  document.getElementById("esitomailyes").innerHTML = "La mail è corretta";

} else{

  document.getElementById("esitomailno").innerHTML = "La mail non è stata trovata";

}




// 4 stampo messaggio sull'esito

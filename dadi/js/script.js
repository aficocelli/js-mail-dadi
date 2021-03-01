/*Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// 1 generare numero random per giocatore

var numeroGiocatore = Math.floor( Math.random( )*6)+ 1;
console.log(numeroGiocatore);
// 2 generare numero random per computer

var numeroComputer = Math.floor( Math.random()*6)+ 1;
// 3 confronto dei due numero

if ( numeroGiocatore > numeroComputer ){
  alert("ha vinto il giocatore ");
} else if ( numeroComputer > numeroGiocatore ){
   alert("ha vinto il computer");
} else {
  alert("pari");
}
// 4 esito

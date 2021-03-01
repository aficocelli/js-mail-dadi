/*Gioco dei dadi
Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// 1 generare numero random per giocatore
var nome = prompt("inserisci il tuo nome");

document.getElementById("nomeGiocatore").innerHTML = nome;

var numeroGiocatore = Math.floor( Math.random( )*6)+ 1;



document.getElementById("player1").innerHTML = numeroGiocatore;
// 2 generare numero random per computer

var numeroComputer = Math.floor( Math.random()*6)+ 1;



document.getElementById("computer").innerHTML = numeroComputer;

// 3 confronto dei due numero

if ( numeroGiocatore > numeroComputer ) {

  document.getElementById("esito1").innerHTML = "YOU WIN!";

  document.getElementById("esito2").innerHTML = "LOOSER...!";

} else if ( numeroComputer > numeroGiocatore ){
  document.getElementById("esito2").innerHTML = "YOU WIN!";

  document.getElementById("esito1").innerHTML = "LOOSER...!";
} else {

  document.getElementById("esito1").innerHTML = "DRAW";

  document.getElementById("esito2").innerHTML = "DRAW";

}
// 4 esito

Griglia Campo Minato
===

1. Creo un container dove inserisco i miei quadrati e lo stilo (flex, ecc)
1. Prima in maniera statica, aggiungo i miei quadrati nell'html
1. Creo lo stile/la classe del quadrato in css, inizialmente per una griglia 10 * 10
1. Stilo la classe 'clicked'
1. Definisco la variabile del container e della top-bar (dove andrà la selezione dei livelli)
1. Definisco la funzione di generazione del quadrato, dando un custom ID basato sull'index del ciclo 
1. Creo la funzione di reset del container e la invoco
1. Creo il ciclo di generazione dei 100 quadrati
1. Creo la funzione di generazione griglia e ci inserisco dentro la nostra generazione quadrati
1. Creo la funzione di generazione del bottone di start, che al click si auto-cancella e invoca la funzione di generazione griglia
1. Controllo quale difficoltà è stata selezionata

## Bombe, vittoria e fine gioco
12. Creo un counter per il punteggio
1. Al click del quadrato rimuovo la funzione click dal quadrato cliccato. Poi '++' counte
1. Creo una lista globale vuota che conterrà le mie bombe
1. Creo una funzione di generazione random di 16 numeri con range min(1)-max(numero quadrati) e con verifica di univocità
1. Creo in css una classe bomba
1. Assegno la classe bomba agli elementi della lista bombe
1. Creo la condizione di fine gioco: mostro le bombe e congelo il gioco
1. Se il giocatore ha cliccato su una bomba perde e stampo il messaggio di sconfitta con punteggio, se invece ha cliccato sull'ultimo quadrato vuoto (numero quadrati - numero bombe) vince e stampo il messaggio di vittoria con punteggio.
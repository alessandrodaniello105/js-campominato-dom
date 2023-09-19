// 5. Definisco la variabile del container
const container   = document.querySelector('.container');
const topBar      = document.querySelector('.top-bar');
const diffSelector = document.getElementById('difficulty-selector');
let started = false;

// START BUTTON
const buttonStart = document.createElement('button');
buttonStart.innerHTML = 'START';
topBar.append(buttonStart);

// const buttonStart = document.getElementById('button');

let squaresNumber; 



// 12. Creo un counter per il punteggio
let counter = 0;

// 14. Creo una lista globale vuota che conterrà le mie bombe
const bombs = [];





reset();

getStarted();


function init(num){

  // 8. Creo il ciclo di generazione dei 100 quadrati
  for (let i = 1; i <= num; i++){

    squareGeneration(i);
  
  };

};


// 6. Definisco la funzione di generazione del quadrato, dando un custom ID basato sull'index del ciclo 
console.log('INIZIO---', counter);
function squareGeneration(index){

  let newSquare = document.createElement('div');

  newSquare.className = 'square';

  newSquare.classList.add('square' + '-' + squaresNumber);

  newSquare._squareID = index;


  // 13. Al click del quadrato rimuovo la funzione click dal quadrato cliccato. Poi '++' counter.
  newSquare.addEventListener('click', handleSquareClick);
  
  function handleSquareClick(){
    newSquare.classList.add('clicked');
    newSquare.removeEventListener('click', handleSquareClick);
    counter++;
    console.log('PUNTEGGIO---', counter, this._squareID);
  };
  
  
  
  
  container.append(newSquare);
  return newSquare;
};


// 7. Creo la funzione di reset del container e la invoco
function reset(){
  container.innerHTML = '';
  bombs.splice(0, bombs.length);
};



// 9. Creo la funzione di generazione griglia e ci inserisco dentro la nostra generazione quadrati


// 10. Creo la funzione di generazione del bottone di start, che al click si auto-cancella e invoca la funzione di generazione griglia
function getStarted(){

  buttonStart.addEventListener('click', function(){
    squaresNumber = choiceDifficulty(diffSelector.value);

    reset();
    
    init(squaresNumber);
    generateBombs(squaresNumber);
  
  });
  
};


// 11. Controllo quale difficoltà è stata selezionata
function choiceDifficulty(value) {

  if (value == 1) return 100;
  if (value == 2) return 81;
  if (value == 3) return 49;

  return false
  
};


// 15. Creo una funzione di generazione random di 16 numeri con range min(1)-max(numero quadrati) e con verifica di univocità

console.log(bombs);
function generateBombs(maxSquares){
  
  let targetBomb = 16

  for (let c = 0; c < targetBomb ; c++){
  
    

    let bomb = Math.ceil(Math.random() * maxSquares);
    
    console.log('numero estratto--', bomb);

    if (bombs.includes(bomb)) {
      console.log('E\' STATO GIA\' ESTRATTO');
      c--
      bomb = Math.ceil(Math.random() * maxSquares);
  
    } else {
      bombs.push(bomb);
    }

  }

  console.log(bombs);
};

function randomizer(max){
  return Math.ceil(Math.random() * max);
};
// ELEMENTS
const container   = document.querySelector('.container');
const topBar      = document.querySelector('.top-bar');
const diffSelector = document.getElementById('difficulty-selector');

let started = false;

// START BUTTON
const buttonStart = document.createElement('button');
buttonStart.innerHTML = 'START';
topBar.append(buttonStart);

let squaresNumber; 



// 1. Creo un counter per il punteggio
let counter = 0;

// 3. Creo una lista globale vuota che conterrà le mie bombe
const bombs = [];





reset();

getStarted();


function init(num){

  for (let i = 1; i <= num; i++){

    squareGeneration(i);
  
  };

};


console.log('INIZIO---', counter);

function squareGeneration(index){

  let newSquare = document.createElement('div');

  newSquare.className = 'square';

  newSquare.classList.add('square' + '-' + squaresNumber);

  newSquare._squareID = index;


  // 2. Al click del quadrato rimuovo la funzione click dal quadrato cliccato. Poi '++' counter.
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


function reset(){
  container.innerHTML = '';
  bombs.splice(0, bombs.length);
};


function getStarted(){

  buttonStart.addEventListener('click', function(){
    squaresNumber = choiceDifficulty(diffSelector.value);

    reset();
    
    init(squaresNumber);
    generateBombs(squaresNumber);
  
  });
  
};

function choiceDifficulty(value) {

  if (value == 0) return false;
  if (value == 1) return 100;
  if (value == 2) return 81;
  if (value == 3) return 49;
  
};


// 4. Creo una funzione di generazione random di 16 numeri con range min(1)-max(numero quadrati) e con verifica di univocità
function generateBombs(maxSquares){
  
  let targetBomb = 16
  
  let isPick = false;

  if (!maxSquares) {
    console.log('mi sono fermato');
    isPick = true;
  } else {

    for (let counterBomb = 0; counterBomb < targetBomb ; counterBomb++){
  
      let bomb = Math.ceil(Math.random() * maxSquares);
      
      console.log('numero estratto--', bomb);
  
   
  
      if (bombs.includes(bomb)) {
        console.log('E\' STATO GIA\' ESTRATTO');
        counterBomb--
        bomb = Math.ceil(Math.random() * maxSquares);
    
      } else {
        bombs.push(bomb);
      }
  
    }

    isPick = true;
  }  



  console.log(bombs);


};

function randomizer(max){
  return Math.ceil(Math.random() * max);
};
// ELEMENTS
const container     = document.querySelector('.container');
const topBar        = document.querySelector('.top-bar');
const diffSelector  = document.getElementById('difficulty-selector');

const message       = document.querySelector('h1');

const messageEnd    = 'Hai perso. Hai cliccato su una bomba!'

let started = false;

// START BUTTON
const buttonStart = document.createElement('button');
buttonStart.innerHTML = 'START';
topBar.append(buttonStart);

let squaresNumber; 



// 1. Creo un counter per il punteggio
let counterPoints = 0;

// 3. Creo una lista globale vuota che conterrà le mie bombe
const bombs = [];


reset();


getStarted();



// FUNCTIONS


function init(num){

  for (let i = 1; i <= num; i++){

    squareGeneration(i);
  
  };

};





/*****  SQUARE GENERATION / BUTTON START *****/
/*****  SQUARE GENERATION / BUTTON START *****/

function squareGeneration(index){

  let newSquare = document.createElement('div');

  newSquareEl(newSquare, index);

  // 7. Assegno la classe bomba agli elementi della lista bombe
  if (bombs.includes(newSquare._squareID)) {
    newSquare.classList.add('bomb');
  }

 let isFind = false;


  // 2. Al click del quadrato rimuovo la funzione click dal quadrato cliccato. Poi '++' counter.
  newSquare.addEventListener('click', handleSquareClick);
  
  function handleSquareClick(){

    // 8. Creo la condizione di fine gioco: mostro le bombe e congelo il gioco
    if (!this.classList.contains('bomb')) {

      this.classList.add('clicked')

    
    } else {
      
      allBombs = document.querySelectorAll('.bomb');
      
      for(let bombEl = 0; bombEl < bombs.length; bombEl++ ) {

        allBombs[bombEl].classList.add('clicked');

      };

      const stopLevel = document.createElement('div');
      stopLevel.className = 'stop-level';
      container.append(stopLevel);

      isFind = true;
    }

    newSquare.removeEventListener('click', handleSquareClick);

    counterPoints++;

    let pointsOutput = document.getElementById('points');
    pointsOutput.innerHTML = "Punteggio: " + counterPoints;

    console.log('PUNTEGGIO---', counterPoints, this._squareID);
    
    // 10.
    if (isFind == true) {

      const endOutput = document.createElement('p')

      endOutput.innerHTML = messageEnd;

      container.append(endOutput);

    }

  };
  
  container.append(newSquare);

  return newSquare;

};


function newSquareEl(element, index) {
  element.className = 'square';

  element.classList.add('square' + '-' + squaresNumber);

  element._squareID = index;
};



/***** RESET FUNCTION ******/

function reset(){
  
  container.innerHTML = '';
  
  bombs.splice(0, bombs.length);
  
  counterPoints = 0;

};






function getStarted(){

  buttonStart.addEventListener('click', function(){

    squaresNumber = choiceDifficulty(diffSelector.value);

    message.innerHTML = '';

    reset();
    
    generateBombs(squaresNumber);

    init(squaresNumber);

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
  

  // 6. Verifico che la selezione del livello sia valida
  if (!maxSquares) {

    console.log('mi sono fermato');


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

  }  

  console.log(bombs);

};


function randomizer(max){
  return Math.ceil(Math.random() * max);
};
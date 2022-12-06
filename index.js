let origBoard
const huPlayer = '0'
const aiPlayer = 'X'
const unbeatable = document.getElementById('unbeatable')
const humanPlayer = document.getElementById('humanPlayer')
const getName = document.getElementById('getName').value
let unbeatableMachine = false
let humanPlay = false
const winCombos = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[6,4,2],
]

// Underscore before functions means private functions

 //Factory function
 
 function createPlayer(name, symbol) {
	return {
		name,
		symbol
	}
 }

const test = createPlayer('Valentin', X)
console.log(test)


const cells = document.querySelectorAll('.cell')
unbeatable.addEventListener('click', unbeatableAI) 

function unbeatableAI() {
	unbeatableMachine = true
	startGame()
}


function restart() {
	unbeatableMachine = false
	
	startGame()
}


startGame()

function startGame() {

}

function turnClick(square) {

}

function turn(squareId, player) {

 }

 function checkWin(board, player) {

 }
function gameOver(gameWon) {
	
}

function declareWinner(who) {

}


function emptySquares() {
	
}

 function bestSpot(square) {

 }

 function checkTie () {
	
 }



 function minimax(newBoard, player) {
	
 }
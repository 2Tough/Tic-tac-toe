

// function createPlayer(getName) {
// 	return {
// 		name: getName,
// 		symbol: huPlayer,

// 		changePlayer() {
// 			symbol: !huPlayer
// 		}

// 	}
// }

// const boardModule = (() => {
    
//     const startGame = (e) => {
        
//     }


// })()





let clickArea = document.querySelectorAll('[data-id]')

let whoseTurn = 'X'
let X_turn = 'X'
let O_turn = 'O'


const globalTest = (() => {
    

  
})()


const globalboard = (() => {
    
     
// works outside

    const test = clickArea.forEach( Element => {
    
    Element.addEventListener('click', (e) => {
    console.log(e.target.dataset.id)
    })

    }) 
    const test2 = clickArea.forEach( Element => {
    Element.addEventListener('click', (e) => {
    console.log('test')
    })
    
    })   
        



    return test
  
})()
// this does't work
// const getId = (() => {
    
//     const test = clickArea.forEach( Element => {
    
//     Element.addEventListener('click', (e) => {
//     console.log(e.target.dataset.id)
// })

// }) 
//     return test
  
// })
//     return getId

// })()












function handleClick(e) {
   const cell = e.target


    whoseTurn ? e.target.innerText = 'x' : e.target.innerText = 'o'

    whoseTurn = !whoseTurn
    
    nextTurn(cell, currentTurn)
}

function placeMark(cell, currentTurn) {
    cell.classList.add(currentTurn)
    clickArea.innerHtml = 'X'
}

function placeMark(cell, currentTurn) {
    cell.classList.add(currentTurn)
    clickArea.innerHtml = 'X'
}







// let origBoard
// const huPlayer = 'X'
// const aiPlayer = 'O'
// const unbeatable = document.getElementById('unbeatable')
// const humanPlayer = document.getElementById('humanPlayer')
// const getName = document.getElementById('getName').value
// const getNameBtn = document.getElementById('getNameB-btn')
// let unbeatableMachine = false
// let humanPlay = false
// const winCombos = [
// 	[0,1,2],
// 	[3,4,5],
// 	[6,7,8],
// 	[0,3,6],
// 	[1,4,7],
// 	[2,5,8],
// 	[0,4,8],
// 	[6,4,2],
// ]


// // Underscore before functions means private functions

//  //Factory function

//  getNameBtn.addEventListener('click', function() {

// 	const test = createPlayer(getName)
// 	console.log(getName)
	
//  })
 
//  function createPlayer(getName) {
// 	return {
// 		name: getName,
// 		symbol: huPlayer,

// 		changePlayer() {
// 			symbol: !huPlayer
// 		}

// 	}
//  }





// const cells = document.querySelectorAll('.cell')
// unbeatable.addEventListener('click', unbeatableAI) 

// function unbeatableAI() {
// 	unbeatableMachine = true
// 	startGame()
// }


// function restart() {
// 	unbeatableMachine = false
	
// 	startGame()
// }


// startGame()

// function startGame() {

// }

// function turnClick(square) {

// }

// function turn(squareId, player) {

//  }

//  function checkWin(board, player) {

//  }
// function gameOver(gameWon) {
	
// }

// function declareWinner(who) {

// }


// function emptySquares() {
	
// }

//  function bestSpot(square) {

//  }

//  function checkTie () {
	
//  }



//  function minimax(newBoard, player) {
	
//  }
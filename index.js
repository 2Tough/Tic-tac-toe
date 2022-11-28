
let clickArea = document.querySelectorAll('[data-gamebox]')
let whoseTurn
let X_turn = 'X'
let O_turn = 'O'


clickArea.forEach(element => {
    element.addEventListener('click', handleClick, {once: true})
});
// const gameBoard = (() => {

   
//         player1 = ""
//         player2 = ""
//         gameboxes = ["","","","","","","","",""]
//         index = []
   


//     const game = ((e) => {
//     // for(let i = 0 ; i < clickArea.length ; i++) {
//     // clickArea[i].addEventListener('click', function() {
//        const cell = e.target
//        const currentTurn = whoseTurn ? X_turn : O_turn

//        putSign(cell, currentTurn)


         
// //    if (clickArea[i].innerHTML == "" || '0') {
// //    clickArea[i].innerHTML = "X";
// //   } else if(clickArea[i].innerHTML == "X"){
// //    clickArea[i].innerHTML = "0";
// //   }
        
// //         gameboxes.splice(i, 1, 'X')
        
//     // })
//     // }
//     })()

// function putSign(cell, currentTurn) {
//     cell.classList.add(currentTurn)
// }

// function swapTurns() {
//     whoseTurn != whoseTurn
// }
        

    
    
    
    
// })()
function handleClick(e) {
    const cell = e.target
    const currentTurn = whoseTurn ? O_turn : X_turn

    nextTurn(cell, currentTurn)
}

function nextTurn(cell, currentTurn) {
    cell.classList.add(currentTurn)
}

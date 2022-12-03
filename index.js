
let clickArea = document.querySelectorAll('[data-gamebox]')
let whoseTurn = 'X'
let X_turn = 'X'
let O_turn = 'O'


clickArea.forEach(element => {
    element.addEventListener('click', handleClick, {once: true})
});

function handleClick(e) {
    whoseTurn ? e.target.innerText = 'x' : e.target.innerText = 'o'
    
    whoseTurn = !whoseTurn
}

function placeMark(cell, currentTurn) {
    cell.classList.add(currentTurn)
    clickArea.innerHtml = 'X'
}


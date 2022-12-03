let turnsArray = []

const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]


clickArea.forEach(element => {
    element.addEventListener('click', handleClick, {once: true})
});

function handleClick(e) {
    whoseTurn ? e.target.innerText = 'x' : e.target.innerText = 'o'
    whoseTurn ? turnsArray.push('x') : turnsArray.push('0')
    
    console.log(e.target.dataset.attribute)
    whoseTurn = !whoseTurn
    
    
}

function placeMark(cell, currentTurn) {
    cell.classList.add(currentTurn)
    clickArea.innerHtml = 'X'
}


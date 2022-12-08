

const factoryPlayer = (playerName, assignedX0) => {
    const getPlayerName = () => {
        playerName
        assignedX0
    }
        
    return {playerName, assignedX0}
}

const testPlayer = factoryPlayer('Player 1', 'X')
console.log(testPlayer)

console.log(factoryPlayer('Player 2', 'O'))


const gameBoardModule = (() => {
    const gameBoard = ["","1","","","","","","1","",];

    const placeMark = (() => {
        const mark = 'testing mark'
        const marking2 = 'mark 2'
        return {mark, marking2}
    })
    
    const createPlayer = (() => {
    const playerOne = factoryPlayer()    
    const playerTwo = factoryPlayer()    
    })
    
    const changeTurns = (() => {
        
        
    })
    
    
    
    

    return {gameBoard, placeMark, changeTurns}
})()




const displayControllerModule = (() => {
    const test = () => {console.log('test')}
    return test
})()

const renderArrayToScreenModule = (() => {
    const gridBoxes = document.querySelectorAll('[data-id]')
    for (let i = 0 ; i < gameBoardModule.gameBoard.length ; i++) {
        gridBoxes[i].textContent = gameBoardModule.gameBoard[i]
        console.log(gameBoardModule.gameBoard)

    }


    
    // console.log("test renderArrayToScreenModule", gameBoardModule.gameBoard)
    // console.log("test node list", gridBoxes)
    console.log("show me the test", gameBoardModule.placeMark())
    return {}
})()

renderArrayToScreenModule
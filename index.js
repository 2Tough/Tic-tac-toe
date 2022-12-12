const factoryPlayer = (playerName, assignedX0) => {
    const getPlayerName = () => {
        playerName
        assignedX0
    }
        
    return {playerName, assignedX0}
}

const testPlayer = factoryPlayer('Player 1 test', 'X')
console.log(testPlayer)

// console.log(factoryPlayer('Player 2 test', 'O'))


const gameBoardModule = (() => {
     // variables 
    const values = []
    
    let input = document.getElementById('getName')
    const getNameBtn = document.getElementById('getName-btn')
    const gameBoard = ["","","","","","","","","",];
    let firstTurn = true
    
    const createdPlayerOneArray = []
    const createdPlayerTwoArray = []

    const placeMark = (() => {
        const gridBoxes = document.querySelectorAll('[data-id]')
        let markSign = firstTurn ? createdPlayerOneArray[1] : createdPlayerTwoArray[1]
        
        gridBoxes.forEach(cell => {
            cell.addEventListener('click', (e)=> {
                console.log(e.target.dataset.id)
                console.log(firstTurn)
                console.log(`${firstTurn ? createdPlayerOneArray[1] : createdPlayerTwoArray[1]}`)
                
                cell.textContent = `${firstTurn ? createdPlayerOneArray[1] : createdPlayerTwoArray[1]}`
                
                // Gameboard get the correct position in the board with .dataset.id, removes the empty space (1), and adds the corresponding mark with markSign.
                gameBoard.splice(e.target.dataset.id, 1, `${firstTurn ? createdPlayerOneArray[1] : createdPlayerTwoArray[1]}`)
                console.log(gameBoard)
                
                changeTurns()
                checkWinner()
                
                
            }, {once : true})
            
            
        })
        
        
        
        
        let mark = 'testing mark'
        const marking2 = 'mark 2'
        return {mark, marking2, markSign}
    })
    
    const createPlayer = (() => {

        getNameBtn.addEventListener('click', () => {
            const playerOne = factoryPlayer(input.value, "X") 
            const playerTwo = factoryPlayer(input.value, "0")
            
            createdPlayerOneArray.push(playerOne.playerName, playerOne.assignedX0)
            createdPlayerOneArray.splice(2,2)
            console.log('result from 1st array: ' + createdPlayerOneArray[1])
            enterName.textContent = 'Enter name for player 2'
            
            
            if(createdPlayerOneArray[0]) {
                
                createdPlayerTwoArray.unshift(playerTwo.playerName, playerTwo.assignedX0)
                createdPlayerTwoArray.splice(2,2)
                
                // console.log(createdPlayerArray[0])
                
                console.log('result from 2nd array: ' +  createdPlayerTwoArray)
            }
            
            })
        
    
        return createdPlayerOneArray, createdPlayerTwoArray
        console.log(createdPlayerOneArray, createdPlayerTwoArray)
    })
    
    const changeTurns = (() => {
          firstTurn = !firstTurn  
          
          return changeTurns
    })
    // brute force checking for mark
    const checkWinner = ((markSign) => {
        
        if(gameBoard[0] === 'X' &&
            gameBoard[1] === 'X' &&
            gameBoard[2] === 'X' 
            
            ||
            
            gameBoard[0] === '0' &&
            gameBoard[1] === '0' &&
            gameBoard[2] === '0' 
            
        ) { console.log("Win")}
        else if (
            gameBoard[3] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[5] === "X"
        ) { console.log("Win")}
        else if (
            gameBoard[6] === "X" &&
            gameBoard[7] === "X" &&
            gameBoard[8] === "X"
        ) { console.log("Win")}
        
    })
    
    
    
    
    return {gameBoard, placeMark, createPlayer, changeTurns, checkWinner}
    
    
})()




const displayControllerModule = (() => {
    const test = () => {console.log('test')}
    return test
})()

const renderArrayToScreenModule = (() => {
    const gridBoxes = document.querySelectorAll('[data-id]')
    
    for (let i = 0 ; i < gameBoardModule.gameBoard.length ; i++) {
        
        console.log("show me the gameboard Module", gameBoardModule.gameBoard[i])
    }
    // console.log("test renderArrayToScreenModule", gameBoardModule.gameBoard)
    // console.log("test node list", gridBoxes)
    
    console.log("show me the mark", gameBoardModule.placeMark())
    console.log("show me the players", gameBoardModule.createPlayer())
    return {}
})()

renderArrayToScreenModule
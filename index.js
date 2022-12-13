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
    const nameScreen = document.getElementById('nameScreen')
    const gameBoard = ["","","","","","","","","",];
    let firstTurn = true
    
    const createdPlayerOneArray = []
    const createdPlayerTwoArray = []
    
    
    const getName = (() => {
        
    })

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
                if(createdPlayerTwoArray.length >= 3) {
                nameScreen.style.display = 'none'
            }
                createdPlayerTwoArray.splice(2,2)
                
                // console.log(createdPlayerArray[0])
                
                console.log('result from 2nd array: ' +  createdPlayerTwoArray)
                console.log(createdPlayerTwoArray.length)
                
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
    const checkWinner = (() => {
        // checking for 1st horizontal line X
        if(gameBoard[0] === 'X' &&
            gameBoard[1] === 'X' &&
            gameBoard[2] === 'X' 
            
        ) {
            console.log(`${createdPlayerOneArray[0]} won!`)
        } else if (
        // checking for 1st horizontal line 0    
            gameBoard[0] === '0' &&
            gameBoard[1] === '0' &&
            gameBoard[2] === '0' 
            
        ) { console.log(`${createdPlayerTwoArray[0]} won!`)}
        // checking for 2nd horizontal line X
        else if (
            gameBoard[3] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[5] === "X"
          ) {
            console.log(`${createdPlayerOneArray[0]} won!`)
        // checking for 2nd horizontal line 0
        } else if (
            
            gameBoard[3] === "0" &&
            gameBoard[4] === "0" &&
            gameBoard[5] === "0"
            
       ) { console.log(`${createdPlayerTwoArray[0]} won!`)}
       // checking for 3rd horizontal line X
        else if (
            gameBoard[6] === "X" &&
            gameBoard[7] === "X" &&
            gameBoard[8] === "X"
        ) { console.log("X Wins")}
        // checking for 3rd horizontal line 0
        else if (
            gameBoard[6] === "0" &&
            gameBoard[7] === "0" &&
            gameBoard[8] === "0"
        ) { console.log("0 Wins")}
        // checking for 1st vertical line X
        else if (
            gameBoard[0] === "X" &&
            gameBoard[3] === "X" &&
            gameBoard[6] === "X"
        ) { console.log("X Wins")}
        // checking for 1st vertical line 0
        else if (
            gameBoard[0] === "0" &&
            gameBoard[3] === "0" &&
            gameBoard[6] === "0"
        ) { console.log("0 Wins")}
        // checking for 2nd vertical line X
        else if (
            gameBoard[1] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[7] === "X"
        ) { console.log("X Wins")}
        // checking for 2nd vertical line 0
        else if (
            gameBoard[1] === "0" &&
            gameBoard[4] === "0" &&
            gameBoard[7] === "0"
        ) { console.log("0 Wins")}
        // checking for 3nd vertical line X
        else if (
            gameBoard[2] === "X" &&
            gameBoard[5] === "X" &&
            gameBoard[8] === "X"
        ) { console.log("X Wins")}
        // checking for 3nd vertical line 0
        else if (
            gameBoard[2] === "0" &&
            gameBoard[5] === "0" &&
            gameBoard[8] === "0"
        ) { console.log("0 Wins")}
        // checking for diagonal line X top left to bottom right
        else if (
            gameBoard[0] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[8] === "X"
        ) { console.log("X Wins")}
        // checking for diagonal line 0 top left to bottom right
        else if (
            gameBoard[0] === "0" &&
            gameBoard[4] === "0" &&
            gameBoard[8] === "0"
        ) { console.log("0 Wins")}
        // checking for diagonal line X top right to bottom left
        else if (
            gameBoard[2] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[6] === "X"
        ) { console.log("X Wins")}
        else if (
            gameBoard[2] === "0" &&
            gameBoard[4] === "0" &&
            gameBoard[6] === "0"
        ) { console.log("0 Wins")}
        else if (
            gameBoard.includes(!"")
        ) { console.log('draw')}
        
        
    })
    
    
    
    
    return {gameBoard, placeMark, createPlayer, changeTurns, checkWinner}
    
    
})()




const displayControllerModule = (() => {
    const test = () => {console.log('testing display Controller')}
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
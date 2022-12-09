///////////////





///////////////////



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
    const gameBoard = ["","1","","","","","","1","",];
    

    

    

    const placeMark = (() => {
        const mark = 'testing mark'
        const marking2 = 'mark 2'
        return {mark, marking2}
    })
    
    const createPlayer = (() => {
        const createdPlayerOneArray = []
        const createdPlayerTwoArray = []
        getNameBtn.addEventListener('click', () => {
            const playerOne = factoryPlayer(input.value, "X") 
            const playerTwo = factoryPlayer(input.value, "0")
            
            createdPlayerOneArray.push(playerOne.playerName, playerOne.assignedX0)
            createdPlayerOneArray.splice(2,2)
            console.log('result from 1st array: ' + createdPlayerOneArray)
            enterName.textContent = 'Enter name for player 2'
            
            
            if(createdPlayerOneArray[0]) {
                
                createdPlayerTwoArray.unshift(playerTwo.playerName, playerTwo.assignedX0)
                createdPlayerTwoArray.splice(2,2)
                
                // console.log(createdPlayerArray[0])
                
                console.log('result from 2nd array: ' +  createdPlayerTwoArray)
            }
            
            })
        
    
        return createdPlayerOneArray, createdPlayerTwoArray
    })
    
    const changeTurns = (() => {
    })
    
    return {gameBoard, placeMark, createPlayer, changeTurns}
})()




const displayControllerModule = (() => {
    const test = () => {console.log('test')}
    return test
})()

const renderArrayToScreenModule = (() => {
    const gridBoxes = document.querySelectorAll('[data-id]')
    for (let i = 0 ; i < gameBoardModule.gameBoard.length ; i++) {
        gridBoxes[i].textContent = gameBoardModule.gameBoard[i]
    }
    // console.log("test renderArrayToScreenModule", gameBoardModule.gameBoard)
    // console.log("test node list", gridBoxes)
    console.log("show me the test", gameBoardModule.placeMark())
    console.log("show me the players", gameBoardModule.createPlayer())
    return {}
})()

renderArrayToScreenModule
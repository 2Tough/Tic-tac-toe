const factoryPlayer = (playerName, sign) => {
    const getPlayerName = () => {
        playerName
        sign
    }
        
    return {playerName, sign}
}

// const testPlayer = factoryPlayer('Player 1 test', 'X')
// console.log(testPlayer)

// console.log(factoryPlayer('Player 2 test', 'O'))


const gameBoardModule = (() => {
     // variables 
    let count = 0
    const nameScreen = document.getElementById('nameScreen')
    const gameBoard = ["","","","","","","","","",];
    let firstTurn = true
    let player1Win = false
    let player2Win = false
    let draw = false
    
    const createdPlayerOneArray = []
    const createdPlayerTwoArray = []
    let setPlayers = []
    let scorePlayer1 = 0
    let scorePlayer2 = 0
    
    
    const placeMark = (() => {
        const gridBoxes = document.querySelectorAll('[data-id]')
       
        
        gridBoxes.forEach(cell => {
            cell.addEventListener('click', (e)=> {
                //console.log(e.target.dataset.id)
                cell.textContent = `${firstTurn ? setPlayers[0].sign : setPlayers[1].sign}`
                // Gameboard gets the correct position in the board with .dataset.id, removes the empty space (1), and adds the corresponding mark with markSign.
                gameBoard.splice(e.target.dataset.id, 1, `${firstTurn ? setPlayers[0].sign : setPlayers[1].sign}`)
                changeTurns()
                checkWinner()
            }, {once : true})
        })
        
        
    })
    
    const createPlayer = (() => {
        const getNameBtn = document.getElementById('getName-btn')
        const nameScreen = document.getElementById('nameScreen')
        const getName1 = document.getElementById('getName1')
        const getName2 = document.getElementById('getName2')
        
        if(localStorage.getItem('player1Sign')) {
           //Setting players in the same format 
           setPlayers.push({playerName: localStorage.getItem('player1Name'), sign: localStorage.getItem('player1Sign')},{playerName: localStorage.getItem('player2Name'), sign: localStorage.getItem('player2Sign')}) 
           nameScreen.style.display = 'none'
           console.log(setPlayers)  
           displayPlayers()
        } 
        
        getNameBtn.addEventListener('click', () => {
            const playerOne = factoryPlayer(getName1.value, "X") 
            const playerTwo = factoryPlayer(getName2.value, "0")
            
            setPlayers.push(playerOne, playerTwo)
            nameScreen.style.display = 'none'
            
            console.log(setPlayers)
            displayPlayers()
            return setPlayers
            })
        return createdPlayerOneArray, createdPlayerTwoArray
    })
    
    const displayPlayers = (() => {
        const playerOneScore = document.getElementById('playerOneScore')
        const playerTwoScore = document.getElementById('playerTwoScore')
            //playerOneScore.textContent =`${playerOne.playerName} score`
            playerOneScore.textContent = `${setPlayers[0].playerName}`
            playerTwoScore.textContent = `${setPlayers[1].playerName}`
            
            saveLocalName()
    })
    
    const saveLocalName = (() => {
        if(setPlayers[0].playerName) {
        //Save name from input
        localStorage.setItem('player1Name', setPlayers[0].playerName)
        localStorage.setItem('player2Name', setPlayers[1].playerName)
        //Save sign
        localStorage.setItem('player1Sign', setPlayers[0].sign)
        localStorage.setItem('player2Sign', setPlayers[1].sign)
        }
        
    })
    
    const DisplayScore = (() => {
        const winMessage = document.getElementById('data-winning-message-text')
        const playerOneScore = document.getElementById('playerOneScore')
        
        console.log(player1Win)
        if(player1Win) {
            nameScreen.style.display = 'block'
            nameScreen.textContent = `${setPlayers[0].playerName} won!`
             if(!localStorage.getItem('scorePlayer1')) {
                scorePlayer1++ 
                localStorage.setItem('scorePlayer1', scorePlayer1)
                console.log(scorePlayer1)
                } else {
                scorePlayer1 = parseInt(localStorage.getItem('scorePlayer1')) +1
                localStorage.setItem('scorePlayer1', scorePlayer1)
                
                }
           
        } else if(player2Win) {
            nameScreen.style.display = 'block'
            nameScreen.textContent = `${setPlayers[1].playerName} won!`
             if(!localStorage.getItem('scorePlayer2')) {
                scorePlayer2++ 
                localStorage.setItem('scorePlayer2', scorePlayer2)
                console.log(scorePlayer2)
                } else {
                scorePlayer2 = parseInt(localStorage.getItem('scorePlayer2')) +1
                localStorage.setItem('scorePlayer2', scorePlayer2) }
        } else if(draw) {
                winMessage.textContent = 'It\'s a draw'
        }
    })
    
    const changeTurns = (() => {
          firstTurn = !firstTurn  
          
          return changeTurns
    })
    // brute force checking for mark
    const checkWinner = (() => {
        // checking for 1st horizontal line X
        if (gameBoard[0] === 'X' &&
            gameBoard[1] === 'X' &&
            gameBoard[2] === 'X' 
        ) {
            console.log(gameBoard)
            player1Win = true
            DisplayScore()
        } else if (
        // checking for 1st horizontal line 0    
            gameBoard[0] === '0' &&
            gameBoard[1] === '0' &&
            gameBoard[2] === '0' 
        ) { 
            player2Win = true
            DisplayScore()
        // checking for 2nd horizontal line X
        } else if (
            gameBoard[3] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[5] === "X"
          ) {
            player1Win = true
            DisplayScore()
        // checking for 2nd horizontal line 0
        } else if (
            gameBoard[3] === "0" &&
            gameBoard[4] === "0" &&
            gameBoard[5] === "0"
       ) { 
           player2Win = true
           DisplayScore()
       // checking for 3rd horizontal line X
       } else if (
            gameBoard[6] === "X" &&
            gameBoard[7] === "X" &&
            gameBoard[8] === "X"
        ) { 
            player1Win = true
            DisplayScore()
        // checking for 3rd horizontal line 0
        } else if (
            gameBoard[6] === "0" &&
            gameBoard[7] === "0" &&
            gameBoard[8] === "0"
        ) { 
            player2Win = true
            DisplayScore()
        // checking for 1st vertical line X
         } else if (
            gameBoard[0] === "X" &&
            gameBoard[3] === "X" &&
            gameBoard[6] === "X"
        ) { 
            player1Win = true
            DisplayScore()
        // checking for 1st vertical line 0
        } else if (
            gameBoard[0] === "0" &&
            gameBoard[3] === "0" &&
            gameBoard[6] === "0"
        ) { 
            player2Win = true
            DisplayScore()
        // checking for 2nd vertical line X
        } else if (
            gameBoard[1] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[7] === "X"
        ) { 
            player1Win = true
            DisplayScore()
        // checking for 2nd vertical line 0
        } else if (
            gameBoard[1] === "0" &&
            gameBoard[4] === "0" &&
            gameBoard[7] === "0"
        ) { 
            player2Win = true
            DisplayScore()
        // checking for 3nd vertical line X
        } else if (
            gameBoard[2] === "X" &&
            gameBoard[5] === "X" &&
            gameBoard[8] === "X"
        ) { 
            player1Win = true
            DisplayScore()
        // checking for 3nd vertical line 0
        } else if (
            gameBoard[2] === "0" &&
            gameBoard[5] === "0" &&
            gameBoard[8] === "0"
        ) { 
            player2Win = true
            DisplayScore()
        // checking for diagonal line X top left to bottom right
        } else if (
            gameBoard[0] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[8] === "X"
        ) { 
            player1Win = true
            DisplayScore()
        // checking for diagonal line 0 top left to bottom right
        } else if (
            gameBoard[0] === "0" &&
            gameBoard[4] === "0" &&
            gameBoard[8] === "0"
        ) { 
            player2Win = true
            DisplayScore()
        // checking for diagonal line X top right to bottom left
        } else if (
            gameBoard[2] === "X" &&
            gameBoard[4] === "X" &&
            gameBoard[6] === "X"
        ) { 
            player1Win = true
            DisplayScore()
        } else if (
            gameBoard[2] === "0" &&
            gameBoard[4] === "0" &&
            gameBoard[6] === "0"
        ) { 
            player2Win = true
            DisplayScore()
        } else if (count == 9){
                draw = true
                DisplayScore()
        }   
        
        return {player1Win, player2Win, draw}
        
        })
    
    return {gameBoard, placeMark, createPlayer, changeTurns, checkWinner, setPlayers}
})()

const displayControllerModule = (() => {
    const nameScreen = document.getElementById('nameScreen')
    const restartBtn = document.getElementById('restart-btn')
    const newGame = document.getElementById('newGame-btn')
    
    restartBtn.addEventListener('click', () => {
        window.location.reload()
        nameScreen.style.display = 'none'
        console.log('Restart')
        
    })
    
    newGame.addEventListener('click', () => {
        localStorage.clear()
        location.reload();
    })
})()

const renderToScreen = (() => {
    const gridBoxes = document.querySelectorAll('[data-id]')
    const playerOneScore = document.getElementById('playerOneScore')
    const playerTwoScore = document.getElementById('playerTwoScore')
    
    
    
    
    if(gameBoardModule.createPlayer().playerName) {
        nameScreen.style.display = 'none'
    }
    gameBoardModule.placeMark()
    
    //console.log("show me the players", gameBoardModule.createPlayer())
    
    return {}
})()


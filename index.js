const factoryPlayer = (playerName, playerNumber, assignedX0) => {
    const getPlayerName = () => {
        playerName
    }
        
    return {playerName, playerNumber, assignedX0}
}


const gameBoardModule = (() => {
    const gameBoard = ["X"];

    return {gameBoard}
})()

const displayControllerModule = (() => {
    const test = () => {console.log('test')}
    return test
})()

const renderArrayToScreenModule = (() => {
    const gridBoxes = document.querySelectorAll('[data-id]')
    gridBoxes[0].textContent = gameBoardModule.gameBoard
    console.log("test renderArrayToScreenModule", gameBoardModule.gameBoard)
    console.log("test node list", gridBoxes)
    return {}
})()

renderArrayToScreenModule
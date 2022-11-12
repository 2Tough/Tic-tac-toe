let clickArea = document.getElementsByClassName('gamebox')



const game = (() => {
for(let i = 0 ; i < clickArea.length ; i++) {
clickArea[i].addEventListener('click', function() {
    console.log('test')
})
}
})()


const gameboardObject = (() => {
    player1 = ""
    player2 = ""
})()


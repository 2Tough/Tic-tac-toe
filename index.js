
let clickArea = document.getElementsByClassName('gamebox')


const gameBoard = (() => {

   
        player1 = ""
        player2 = ""
        gameboxes = ["","","","","","","","",""]
        index = []
   


    const game = (() => {
    for(let i = 0 ; i < clickArea.length ; i++) {
    clickArea[i].addEventListener('click', function() {
       
         
   if (clickArea[i].innerHTML == "" || '0') {
   clickArea[i].innerHTML = "X";
  } else if(clickArea[i].innerHTML == "X"){
   clickArea[i].innerHTML = "0";
  }
        
        gameboxes.splice(i, 1, 'X')
        
    })
    }
    })()


        


    
    
    
    
})()

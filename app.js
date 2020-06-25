document.addEventListener('DOMContentLoaded', ()=>{
    var seg=0;
    var min=0;
    var hora=0;
    var segundos;
    var minutos;
    var horaT;
    
    setInterval(function (){

       seg++;
       if(seg>=60){
           seg=0;
           min++;
       }

       if(min>=60){
           min=0;
           hora++;
       }
       if(hora>=24){
           hora=0;
       }
       if(seg<10){var segundos="0"+seg}else{segundos=seg;}
       if(min<10){var minutos="0"+min}else{minutos=min;}
       if(hora<10){var horaT="0"+hora}else{horaT=hora;}

       var tiempo= horaT+":"+minutos+":"+segundos;
      document.getElementById("tiempo").innerHTML=tiempo;

    },1000);
        
    //card options
    const cardArray=[
        { 
            name: 'bugsy',
            img: 'images/bugsy.png'
        },
        { 
            name: 'bugsy',
            img: 'images/bugsy.png'
        },
        
        { 
            name: 'internal',
            img: 'images/internal_drive_dark.png'

        },
        { 
            name: 'internal',
            img: 'images/internal_drive_dark.png'

        },
       
        {
            name: 'sandwich',
            img: 'images/sandwich.png'
        },

        {
            name: 'sandwich',
            img: 'images/sandwich.png'
        },

        {
            name: 'sox',
            img: 'images/sox.png'
        },

        {
            name: 'sox',
            img: 'images/sox.png'
        },

        { 
            name: 'turkey',
            img: 'images/turkey.png'
        },

        { 
            name: 'turkey',
            img: 'images/turkey.png'
        },
        { 
            name: 'twitterrific',
            img: 'images/twitterrific_alt.png'
        },
        { 
            name: 'twitterrific',
            img: 'images/twitterrific_alt.png'
        }];


     cardArray.sort(()=> 0.5- Math.random());

     const grid = document.querySelector('.grid');

     const resultDisplay= document.querySelector("#result")
     const intentosDisplay= document.querySelector("#intentos")
     var cardChosen = [];
     var cardChosenId=[];
     var intentos = 0;
     var cardsWon = []
     var clickpic=0;


//Create your board
function createBoard(){

    for(let i =0; i < cardArray.length; i++){

        var card= document.createElement('img')
        card.setAttribute('src', 'images/moon.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// check for matches
function checkForMatch(){

    var cards= document.querySelectorAll('img')
    const optionOneId= cardChosenId[0]
    const optionTwoId= cardChosenId[1]
 

    if(cardChosen[0] === cardChosen[1]){
    
        alert('Encontraste uno')
 
        cards[optionOneId].setAttribute('src', 'images/dialog.png')
 
        cards[optionTwoId].setAttribute('src', 'images/dialog.png')
 
        cardsWon.push(cardChosen)
     
        
    } else {

        cards[optionOneId].setAttribute('src', 'images/moon.png')
    
        cards[optionTwoId].setAttribute('src', 'images/moon.png')
    
       // alert('Sorry, try again')
    
        }

        cardChosen= []
        cardChosenId= []

        resultDisplay.textContent = cardsWon.length

    if (cardsWon.length=== cardArray.length/2) {
    resultDisplay.textContent= 'Felicidades los encontraste todos'
      }
    }


// flip your card
function flipCard(){
  
    var cardId= this.getAttribute('data-id')
    var cardSrc= this.getAttribute('src')
    

   //Fix of a problem: para que no se pulse la misma imagen dos veces.

   if (cardSrc === 'images/moon.png'){
     
        
    
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
   
    this.setAttribute('src', cardArray[cardId].img)

    if (cardChosenId.length === 2){
        intentos++;
     intentosDisplay.textContent=intentos;
       setTimeout(checkForMatch,200)
    }
    } else {
     alert('Haga click en otra imagen diferente')
    }
    }

createBoard();

})
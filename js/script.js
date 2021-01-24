const blankCardBack = "data:image/jpeg;base64,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"
let user1Deck = []
let allPlayersInGame = []
let computerDeck = []
let userScore = 0
let computerScore = 0
let currentUser = ''
let TURN = 0

document.addEventListener("DOMContentLoaded", function(e){
    getPlayers()
    .then(() => {
        i = 0
        while (i < 200) {
       const firstRandomPlayer = allPlayersArray[[Math.floor(Math.random() * allPlayersArray.length)]]
        allPlayersArray.pop(firstRandomPlayer)
        user1Deck.push(firstRandomPlayer)
            allPlayersInGame.push(firstRandomPlayer)
       const secondRandomPlayer = allPlayersArray[[Math.floor(Math.random() * allPlayersArray.length)]]
            allPlayersArray.pop(secondRandomPlayer)
        computerDeck.push(secondRandomPlayer)
            allPlayersInGame.push(secondRandomPlayer)
        i++
        }
    })

let allPlayersArray = []
let pitchersArray = []
let hittersArray = []
let pitcherCardsArray = []
let hitterCardsArray = []
let allPlayerCardsArray = []

function getPlayers(){
   return fetch("http://localhost:3000/players")
        .then(response => response.json())
        .then(players => {
            
            players.forEach(player=>{
                if (player.job === "pitcher")

                pitchersArray.push(player)
                allPlayersArray.push(player)
                pitcherCardsArray.push(pitcherCard)
                allPlayerCardsArray.push(pitcherCard)
                                }
                if (player.job === "hitter"){

                const hitterCard = document.createElement("div")
                    hitterCard.innerHTMLHTML = 
                    `
                <div>
                    <span>Name</span><p>${player.name}</p>
                    <span>War</span><p>${player.war}</p>
                    <span>AB</span><p>${player.at_bats}</p>
                    <span>H</span><p>${player.hits}</p>
                    <span>Runs</span><p>${player.runs}</p>
                    <span>RBI</span><p>${player.rbi}</p>
                    <span>HR</span><p>${player.hr}</p>
                    <span>Avg</span><p>${player.avg}</p>
                    <span>SB</span><p>${player.stolen_bases}</p>
                </div>

                    allPlayersArray.push(player)
                    hittersArray.push(player)
                    hitterCardsArray.push(hitterCard)
                    allPlayerCardsArray.push(hitterCard)
                }
                
                
            })


        })
        .catch(err => console.error("error: ", err, err.stack))
    }



    document.addEventListener('click', function(e) {
        if(e.target.id === "submit"){
            e.preventDefault()
            e.target.parentNode.classList.add('hide')
            username = e.target.parentNode.children[1].value
            currentUser = username
            fetch("http://localhost:3000/users/new",{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({
                    "username": username
                })
            })
        }
        if (e.target.id === "computer-deck") {
            hand = (document.getElementsByClassName('container'))
            for (let item of hand){
                // console.log(item)
            }
            dealComputerCard() //end of one card in play if statement
        }

      if(e.target.className === "deck2"){
          if (TURN < 1){
            let playerHand = Array.from(document.getElementsByClassName('container'))
          playerHand.forEach(card => {

              if (card.id !== "user-deck") {
                  card.remove()
              }
          })





        //     // console.log(playerHand)
        //   for (let playerCardinHand of playerHand) {
        //       console.log(playerCardinHand)
        //       playerCardinHand.remove()
        //     //   if (item.id !== "user-deck") {
        //     //     }
        //     }
            dealNewCard()
            dealNewCard()
            dealNewCard()
            dealNewCard()
            dealNewCard()
            TURN++
          }
        
        } else {
        let card = document.getElementById(e.target.id)
          card.classList.toggle('is-flipped');
          allPlayersArray.forEach(player => {
          if (e.target.className === "card is-flipped"){
                    if(player.name === e.target.parentNode.innerText){
                        e.target.src = blankCardBack
                        baseballCard = document.createElement("div")    
                        e.target.append(baseballCard)
                        

                    } //end of if statement player.name = node.innertext
                } //end of if card is flipped
            })
        }
          if (e.target.className === "card"){
                if(player.name === e.target.parentNode.innerText) {
                    e.target.src = player.image
                } //end of if player.name statement
            } // end of e.target.classname if statement
        }) //end of forEach statement  
    })

function allowDrop(allowdropevent) {
    allowdropevent.preventDefault()
}
function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id)
}
function evaluateBattle(){
  let computerPlayingCard = document.getElementsByClassName("computer-in-play")[0]
  let userPlayingCard = document.getElementsByClassName("in-play")[0]
 let userCurrentCardWarScore = parseInt(userPlayingCard.id, 10) 
  let computerCurrentCardWarScore = parseInt(computerPlayingCard.id, 10)
    if (userCurrentCardWarScore > computerCurrentCardWarScore){
      let battleScore = userCurrentCardWarScore - computerCurrentCardWarScore
      userScore = userScore + battleScore
  
    document.getElementById('player-score').children[0].innerText = parseInt(userScore, 10)
    } else if (computerCurrentCardWarScore > userCurrentCardWarScore) {
      battleScore = computerCurrentCardWarScore - userCurrentCardWarScore
      computerScore = computerScore + battleScore
      document.getElementById('computer-score').children[0].innerText = parseInt(computerScore,10)
    }
    setTimeout(function(){
        computerPlayingCard.remove()
        userPlayingCard.remove()
    }, 1000)
    if (computerScore > 200 || userScore > 200){
        let finalScore = 0
    if(computerScore > 200){
        finalScore = -(computerScore - userScore)
        // console.log(finalScore)
    }
    if (userScore > 200){
        finalScore = userScore - computerScore
        // console.log(finalScore)
    }

    fetch(`http://localhost:3000/users/games/new`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        "score": finalScore,
        "username": username
    })
    })
}}
function drop(dropevent) {
    dropevent.preventDefault()
    let data = dropevent.dataTransfer.getData("text")
    dropevent.target.appendChild(document.getElementById(data))
    let playerCard = document.getElementById(data)
    document.getElementsByClassName(playerCard.id)[0].remove()
    playerCard.classList.add('in-play')
    document.getElementById('playing-field').classList.add('pointer')
    evaluateBattle()
    dealNewCard()
    setTimeout(function () {
        dealComputerCard()
    },1100)
}
function dealNewCard() {
    document.getElementById('playing-field').classList.remove('pointer')
    let newcard = document.createElement('div')
    newcard.classList.add("container")

    newcard.innerHTML = `<img src=${user1Deck[0].image} class = "card" draggable = "true" ondragstart = "drag(event)" id= "${user1Deck[0].war}" > <div class = "text-block ${user1Deck[0].war}"><p class = "text-block">${user1Deck[0].name}</p><p class = "text-block"> WAR: ${user1Deck[0].war}</p></div></div>`
    document.getElementsByClassName("player-cards")[0].prepend(newcard)
    if (user1Deck[0].war < 45) {
        newcard.classList.add("low-card")
    }
    if (user1Deck[0].war >= 45 && user1Deck[0].war < 90) {
        newcard.classList.add("mid-card")
    }
    if (user1Deck[0].war >= 90 && user1Deck[0].war < 140) {
        newcard.classList.add("high-card")
    }
    if (user1Deck[0].war >= 140) {
        newcard.classList.add("legendary-card")
    }
    if (user1Deck[0].name === "Babe Ruth") {
        newcard.classList.add("Babe-Ruth-card")
    }
    newcard.id = user1Deck[0].war
    user1Deck.splice(0, 1)
    TURN = 0
}
function dealComputerCard(){
    if (document.getElementsByClassName("computer-in-play").length < 1) {
        let computerPlayingCard = document.createElement("img")
        computerHand = []
        let i = 0
        let moneyCard
        while (i < 5) {
            const randomComputerCard = computerDeck[[Math.floor(Math.random() * computerDeck.length)]]
            computerHand.push(randomComputerCard)
           if (computerHand.length < 2){
             moneyCard = computerHand[0]  }
            if (computerHand[i].war > moneyCard.war){
               moneyCard = computerHand[i]
            }
            i ++ 
        }
        computerPlayingCard.src = moneyCard.image
        document.getElementById("playing-field").appendChild(computerPlayingCard)
        if (moneyCard.war < 45) {
            computerPlayingCard.classList.add("low-card")
        }
        if (moneyCard.war >= 50 && moneyCard.war < 90) {
            computerPlayingCard.classList.add("mid-card")
        }
        if (moneyCard.war >= 90 && moneyCard.war < 140) {
            computerPlayingCard.classList.add("high-card")
        }
        if (moneyCard.war >= 140) {
            computerPlayingCard.classList.add("legendary-card")
        }
        if (moneyCard.name === "Babe Ruth") {
            computerPlayingCard.classList.add("Babe-Ruth-card")
        }
        computerPlayingCard.id = moneyCard.war
        computerPlayingCard.classList.add("computer-in-play")
       moneyCardIndex = computerDeck.indexOf(moneyCard)
       computerDeck.splice(moneyCardIndex, 1)
    //    console.log(computerDeck)
    }
}

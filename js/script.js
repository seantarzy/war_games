document.addEventListener("DOMContentLoaded", function(e){
    e.preventDefault
    const player1 = document.getElementsByClassName("player-1")
    const player2 = document.getElementsByClassName("player-2")
    const deckOne = document.querySelector(".player-1-deck")
    const deckTwo = document.querySelector(".player-2-deck")
    let deck1Img = document.createElement("img")
    let deck2Img = document.createElement("img")

    let battleField = document.querySelector(".battle-field")
    battleField.style.height = "100px"
    deck1Img.src = 'https://dacardworld1.imgix.net/1978toppsbaseball22.jpg?auto=format%2Ccompress&fm=jpg&h=1800&ixlib=php-3.1.0&w=1800&s=1ff8e70be1926b302770e0d1de7ffa42'
    deck2Img.src = 'https://dacardworld1.imgix.net/1978toppsbaseball22.jpg?auto=format%2Ccompress&fm=jpg&h=1800&ixlib=php-3.1.0&w=1800&s=1ff8e70be1926b302770e0d1de7ffa42'
    deckOne.append(deck1Img)
    deckTwo.append(deck2Img)
    getPlayers()
})

function getPlayers(){
    fetch("http://localhost:3000/players")
        .then(response => response.json())
        .then(players => console.log(players))
        .catch(err => console.error("error: ", err, err.stack))
}
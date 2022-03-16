class Game {
    constructor() {
        this.status = 0;
        this.clics = 0;
        this.cards = this.initCards();
        this.timer = new Timer() ;
        this.playedCards = [];
    }

    startGame() {
        this.timer.start()
    }

    endGame() {
        this.timer.stop()
        alert (`Bravo ! Vous avez mis ${this.timer.getCount()} secondes et joué ${this.clics} clics`);
        this.showResetButton();
    }

    showResetButton(){

    }

    play(cardIndex) {
        if(this.clics == 0){
            this.startGame();
        }
        this.clics++;
        this.cards[cardIndex].turn();
        this.checkPair();
        this.playedCards.push(this.cards[cardIndex]);
    }

    checkPair(){
        if (this.playedCards.length < 2) {
            return;
        }
        if (this.playedCards[0].value == this.playedCards[1].value) {
            this.checkWin();
        }else{
            this.playedCards[0].turn();
            this.playedCards[1].turn()
        }
        this.playedCards = [];

    }

    checkWin() {
        if(this.cards.every(card => card.state == 1)) {
            this.endGame();
        }
    }

    initCards() {
        let cards = [new Card("🧦"), new Card("🧦"),new Card("🏧"),new Card("🏧"),new Card("🐵"),new Card("🐵"),new Card("🎄"),new Card("🎄")  ]
        shuffle(cards)
        let div = document.querySelector('#game')
        for (let i = 0; i < cards.length; i++) {
            const element = cards[i];
            let cardDiv = document.createElement("div")
            let newContent = document.createTextNode(element.value);
            cardDiv.setAttribute('data-index', i);
            cardDiv.appendChild(newContent);
            div.appendChild(cardDiv)
        }

        return cards;

    }

    reset() {
        this.cards = this.initCards()
        this.played = [];
        this.timer.reset();
    }
}

class Card {
    constructor(value) {
        this.value = value;
        this.state = 0;
    }

    turn(){
        if (this.state == 0) {
            this.state = 1
        }else if (this.state == 1){
            this.state = 0
        }

    }
}

class Timer {
    startTime;
    endTime;

    start() {
        this.startTime =  Date.now()

    }

    stop() {
        this.endTime = Date.now()
    }

    getCount(){
     return (this.endTime - this.startTime) /1000

    }
    reset(){
        this.startTime = null;
        this.endTime = null;
    }

}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

let game = new Game();
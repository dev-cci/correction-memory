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

module.exports = Card;
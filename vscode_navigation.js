class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Human extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    talk(message) {
        console.log(message);
    }
}

class Dog extends Animal {
    constructor(name, age, proprietary) {
        super(name, age);
        this.proprietary = proprietary;
    }

    bark() {
        console.log('Waf ! Waf ! ');
    }
}

let unknownAnimal = new Animal('???', 3)

let human = new Human('Pedro', 45)
let human2 = new Human('Arthur', 55)

console.log(human.name);
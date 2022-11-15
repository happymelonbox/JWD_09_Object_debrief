class Animal {
    constructor(breed, name, gender, colour){
        this.breed = breed;
        this.name = name;
        this.gender = gender;
        this.colour = colour;
    }
}

class Dog extends Animal{
    constructor(breed, name, gender, colour, favourite_activity){
        super(breed, name, gender, colour)
        this.favourite_activity = favourite_activity
    }
}

class Cat extends Animal {
    constructor(breed, name, gender, colour){
        super(breed, colour, name, gender)
    }
}

class Hamster extends Animal{
    constructor(breed, name, gender, colour){
        super(breed, colour, name, gender)
    }
}
const justin = new Animal("Human", "Pale", "Justin, I think...??", "Male")
const donny = new Hamster("Syrian", "Brown", "Donny the Super Fly Hamster III", "Male")
const stonks = new Dog("Pointer", "Grey", "Stonks", "Female", "drool on shoes")
const ivanTheTerrible = new Cat("Persian", "White", "Ivan the worst cat that ever existed", "Male")

console.log(justin)
console.log(donny)
console.log(stonks)
console.log(ivanTheTerrible)
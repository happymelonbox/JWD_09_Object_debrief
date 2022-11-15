class Animal {
    static id = 0
    constructor(breed, name, gender, colour){
        this.id = Animal.id++
        this.breed = breed;
        this.name = name;
        this.gender = gender;
        this.colour = colour;
    }
}

class Student {
    static id = 0
    constructor(first_name = "", last_name = "", age = 0, favourite_color = "", favourite_food = "", animals = []){
        this.id = Student.id++
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.favourite_color = favourite_color;
        this.favourite_food = favourite_food;
        this.animals = animals
    }

    shoutName(){
        console.log(`MY NAME IS ${this.first_name.toUpperCase()} ${this.last_name.toUpperCase()}!!!!`)
    }

    logFood(){
        console.log(`My favourite food is ${this.favourite_food}`)
    }

}



let fido = new Animal("Pointer", "Fido", "Male", "Grey")
let mittens = new Animal("Persian", "Mittens", "Female", "White")
let userAnimals = {
    animal1: fido,
    animal2: mittens
}
let user = new Student("james", "howes", 32, "grey", "burger", userAnimals)
let user2 = new Student("james", "howes", 32, "grey", "burger", userAnimals)

function saveToLocalStorage(obj){
    localStorage.setItem(obj.id, JSON.stringify(obj))
}

saveToLocalStorage(user)
saveToLocalStorage(user2)

function accessLocalStorage(argument){
    console.log(localStorage.getItem(argument))
}

accessLocalStorage(0)

localStorage.removeItem(0)

localStorage.clear()
console.log(localStorage)
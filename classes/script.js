class Student {
    static id = 0
    constructor(first_name = "", last_name = "", age = 0, favourite_color = "", favourite_food = ""){
        this.id = Student.id++
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.favourite_color = favourite_color;
        this.favourite_food = favourite_food;
    }

    shoutName(){
        console.log(`MY NAME IS ${this.first_name.toUpperCase()} ${this.last_name.toUpperCase()}!!!!`)
    }

    logFood(){
        console.log(`My favourite food is ${this.favourite_food}`)
    }

}

let bob = new Student("bob", "stevenson", 32, "red", "burgers")
let sally = new Student("sally", "stevenson", 32, "blue", "fries")
let james = new Student("James", "stevenson", 32, "purple", "kale")

// console.log(bob)
// console.log(sally)
// console.log(james)

// james.shoutName()
// sally.logFood()
// sally.shoutName()

// const peopleNestedArray = [["George", "Ocean", 22, "green", "Burgers"],["jerry", "armitage", 54, "red", "Chicken Burger"],["Sally", "Stevenson", 99, "purple", "Milk Shake"]]
// let newArray = []
// peopleNestedArray.map(eachArray => {
//     newArray.push(new Student(eachArray[0], eachArray[1], eachArray[2], eachArray[4]))
// })

// console.log(newArray)

// const peopleArrayOfObjects = [{first_name: "George", last_name: "Ocean", age: 22, favorite_color: "green", favorite_food: "Burger"}, {first_name: "jerry", last_name: "armitage", age: 54, favorite_color: "red", favorite_food: "pizza"}, {first_name: "Sally", last_name: "Stevenson", age: 99, favorite_color: "purple", favorite_food: "butter chicken"}]
// let newArray = []
// peopleArrayOfObjects.map(eachObject => {
//     newArray.push(new Student(eachObject.first_name, eachObject.last_name, eachObject.age, eachObject.favorite_color, eachObject.favorite_food))
// })
// console.log(newArray)

// newArray.map(eachStudent => {
//     eachStudent.logFood()
// })


const obj = {first_name: "George", last_name: "Ocean", age: 22, favorite_color: "green", favorite_food: "Burger"}

// const keys = Object.keys(obj)
// console.log(keys)

// const values = Object.values(obj)
// console.log(values)

// const entries = Object.entries(obj)
// console.log(entries)

// entries.map(each => {
//     console.log(`${each[0]}: ${each[1]}`)
// })

// for...of
// for (const [key, value] of Object.entries(obj)){
//     console.log(`${key}: ${value}`)
// }

// for..in
for (const key in obj){
    console.log(`${key}: ${obj[key]}`)
}
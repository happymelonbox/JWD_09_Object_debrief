// A regular function can set and get (return) a value similar to a getter and setter function

function Car() {
    const fuel = 50
    return {
        fuel
    }
}

const car = Car()
console.log(car.fuel) 
>>> 50
car.fuel = 100
console.log(car.fuel)
>>> 100

// A getter function can encapuslate a property and therefore create safe code that cannot be changed. 

function Car1() {
    const fuel = 50
    return {
        get fuel() { return fuel }
    }
}

const car1 = Car1()
car1.fuel = 3000
console.log(car1.fuel)
>>> 50

// A setter function can further safeguard a property by imposing conditions on it that need to be met.

function Car2() {
    let fuel = 50
    return {
        get fuel() { return fuel },
        set fuel(value) {
            fuel = value
            if (value > 100) fuel = 100
        }
    }
}

const car2 = Car2()
car2.fuel = 3000
console.log(car2.fuel) 
>>> 100



class SecondCar {
    constructor(brand) {
      this._carname = brand;
    }
    get carname() {
      return this._carname;
    }
    set carname(x) {
      this._carname = x;
    }
  }

  let myCar = new SecondCar("Ford");
  myCar.carname = "mazda";
  console.log(myCar)
  console.log(myCar.carname)

//   comment out the setter and run again
//   then
//   comment out both and run again
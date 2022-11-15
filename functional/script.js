function passingParameter(param1, param2, param3){
    return (param1 * param2) + param3
}

// console.log(passingParameter(12, 25, 76))

function usePassingParameter(x, y){
    let newValue = x + y
    return console.log(`This is the function running ${passingParameter(param1 = x, param2 = y, param3 = newValue)}`)
}

usePassingParameter(78, 96)
/*
if (condition) {
    // if statements
} else {
    // else statements
}

== equals -> ===
!= doesn't equal -> !==
 */

// let personID; // 55
//
// if (personID === undefined){
//     console.log('person is missing id')
// } else if (personID !== undefined) {
//     console.log("person has ID")
// } else {
//     console.log("there was an error")
// }




// const color = "red"
//
// if (color == "red"){
//     console.log("stop")
// } else if (color == "yellow"){
//     console.log("Attention")
// } else if (color == "green"){
//     console.log("Go")
// }
// console.log(color)

/*
condition1 && condition2 - and
condition1 || condition2 - and
 */

const name = "kadi"
const age = "8"
if (age > 0 && age <= 12){
    console.log(`${name} on laps`)
} else if (age > 12 && age <= 18){
    console.log(`${name} on nooruk`)
} else {
    console.log(`${name} on täiskasvanu`)
}

let id = 5

if (id === 100){
    console.log("ok")
} else {
    console.log("not")
}

//? - ternary
console.log(id == 100 ? 'ok' : 'not')

// switch
const color = "green"

switch (color) {
    case "red":
        console.log("Stop!")
    case "yellow":
        console.log("Start stoping!")
    case "green":
        console.log("go!")
}

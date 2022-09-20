console.log("Hello World!")

// data types
// string

// variables
let name = "Alfred Eschbaum"
name = "new name"
console.log(name)
console.log(typeof name)

let goodMark = 5
console.log(goodMark)
console.log(typeof goodMark)

let percent = 50.3
console.log(percent)
console.log(typeof percent)

let isHere = true //false
console.log(isHere)
console.log(typeof isHere)


// const
const surname = "Eschbaum"
// surname = "Kork" - error

// arrays
const numbers = [1, 2, 3, 4, 5]
console.log(numbers)
numbers.push(6)
console.log(numbers)

// objects
const person = {
    firstname: 'Alfred',
    surname: 'Eschbaum'
}
console.log(person)
console.log(person.firstname)
console.log(person.surname)
person.age = '17'
console.log(person.age)

// Null
const airplane = null
console.log(airplane)
console.log(typeof airplane)

//symbol
const sym = Symbol()
console.log(sym)
console.log(typeof sym)

//undefined

let test
console.log(test)
console.log(typeof test)
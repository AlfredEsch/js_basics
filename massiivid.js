const num1 = [2, 4, 8, 3, 5, 16]
const num2 = new Array(22, 45, 33, 76, 54)

let val

val = num1.length
val = num2.length

val = num1[3]
val = num1.indexOf(36)

val = Array.isArray(num2)

num1.push(250)
num1.pop()
num2.unshift(120)
num1.shift()

val = num1.concat(num2)

const fruits = ['pineapple', 'apple', 'orange']
val = fruits.sort()


val = num1.sort(function (x,y) {
    return y - x

})


console.log(val)
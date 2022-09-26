// function greeting(name) {
//     // console.log(hello, ${name}!')
//     return `hello, ${name}!`
// }
//
// // greeting('Alfred')
// // let greet = greeting("Alfred")
// // console.log(greet)
//
// const square = function (number) {
//     return number * number
// }
//
// // let result = square(3)
// // console.log(result)



// IIFE - Immediatley Invokable Function Expression

(function (){
    console.log('function is running')
})();

(function (name){
    console.log(`hello, ${name}!`)
})('Alfred')

const todo = {
    add: function (){
        console.log('add todo...')
    },
    edit: function (){
        console.log('edit todo...')
    },
    delete: function (){
        console.log('delete todo...')
    }
}

todo.add()
todo.edit()
todo.delete()
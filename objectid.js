const person = {
    firstname: 'Kati',
    lastname: 'Tamme',
    age: 40,
    email: 'katitamm@gmail.com',
    hobbies: ['tennis', 'korvpall'],
    address: {
        city: 'võru',
        county: 'võrumaa'
    },
    getBirthYear: function (){
        return 2022 - this.age
    }
}

let val
val = person
val = person['firstname']
val = person["hobbies"]
val = person.address.city
val = person.address["city"]
val = person.getBirthYear()
console.log(val)

// for (let i = 0; i < person.hobbies.length; i++){
//     console.log(person.hobbies[i])
// }
//
// person.hobbies.forEach(function (hobbiesmnm,index){
//     console.log(hobbie + "on element indeksiga" + index)
//     console.log(hobbies)
// })

person.hobbies.forEach(function (hobbie,index))=> {
    console.log(hobbie + "on element indeksiga" + index)
    console.log(hobbies)
}


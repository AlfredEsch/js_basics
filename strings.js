// const firstname = 'Alfred'
// const surname = 'Eschbaum'
//
// let val = firstname + ' ' + surname
//
// val = "alfred"
// val += surname
//
// val = firstname.toUpperCase()
// val = surname.toLowerCase()
//
// val = surname[0]
// val = surname.indexOf('e')
// val = surname.lastIndexOf('e')
//
// val = surname.charAt(2)
// val = surname.charAt(surname.length - 1)
//
// val = surname.substring(0, 4)
// val = surname.slice(0, 4)
// val = surname.slice(-3)
//
// const tags = 'JS, HTML, CSS'
// val = tags.split(',')
//
//
// console.log(val[1].trim())

const firstname = 'Alfred'
const lastname = 'Eschbaum'
const email = 'alfred.eschbaum@voco.ee'
const department = 'IKT'

let result = '<ul>' +
    '<li><b>Name:<b>' + firstname + '</li>' +
    '<li><b>Lastname:</b>' + lastname + '</li>' +
    '<li><b>Email:</b>' + email + '</li>' +
    '<li><b>Department</b>' + department + '</li>' +
    '</ul>'

result = `
    <ul> 
    <li><b>Name: </b>${firstname}</li> 
    <li><b>Lastname:</b>${lastname}</li> 
    <li><b>Email:</b>${email}</li>
    <li><b>Department: </b>${department}</li>
    </ul> `


console.log(result)
document.body.innerHTML = result
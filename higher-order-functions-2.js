/**
 * * EP 3*/

const persons = [
  { name: 'Jane', age: 9 },
  { name: 'Jane', age: 10 },
  { name: 'Jim', age: 15 },
  { name: 'John', age: 17 },
  { name: 'Joey', age: 20 }
]

/**
 * * forEach*/

// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   // if (person.age > 15) continue
//   console.log(`Name ${person.name}, Age ${person.age}`)
// }

persons.forEach((person) =>
  console.log(`Name ${person.name}, Age ${person.age}`)
)

/**
 * * find, findIndex*/
// let jane
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   if (person.name === 'Jane') {
//     jane = person
//     break
//   }
// }

const jane = persons.find((person) => person.name === 'Jane')

console.log('Jane :', jane)

const janeIndex = persons.findIndex((person) => person.name === 'Jane')

console.log('Jane Index :', janeIndex)

/**
 * * every, some */

// let isKid = true

// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   if (person.age > 15) {
//     // console.log(person.age)
//     isKid = false
//     break
//   }
// }

const isKidEvery = persons.every((person) => person.age < 15)

console.log('isKid : ', isKidEvery)

const isKidSome = persons.some((person) => person.age < 15)

console.log('isKid : ', isKidSome)

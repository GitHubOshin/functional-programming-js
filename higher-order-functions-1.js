/**
 * * EP1*/

// 1. Pure Function
// 2. Avoid Side Effect
// 3. First class function
//    3.1  Assigning a function to a variable

/**
 * * EP2*/
// 4. Higher order functions
//    4.1 Returning a function
//    4.2 Accepting a function as an argument

const persons = [
  { name: 'John', age: 17 },
  { name: 'Jane', age: 10 },
  { name: 'Jim', age: 15 }
]

/**
 * * Filter*/

// const kids = []

// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   if (person.age <= 15) {
//     kids.push(person)
//   }
// }

const kids = persons.filter((person) => person.age <= 15)
console.log('Kids :', kids)

/**
 * * Map*/

// const olderPersons = []

// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   olderPersons.push({ ...person, age: person.age * 2 })
// }

const olderPersons = persons.map((person) => ({
  ...person,
  age: person.age * 2
}))

console.log(olderPersons)

// reduce

// let totalAge = 0
// for (let i = 0; i < persons.length; i++) {
//   const person = persons[i]
//   totalAge += person.age
// }

const totalAge = persons.reduce((age, person) => age + person.age, 0)

console.log('Total age: ', totalAge)


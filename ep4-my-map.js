/*
 * EP 4 : My function*/

const persons = [
  { name: 'John', age: 17 },
  { name: 'Jane', age: 10 },
  { name: 'Jim', age: 15 }
]

/*
 * Map */

// const olderPersons = persons.map((person) => ({
//   ...person,
//   age: person.age * 2
// }))

// console.log('Older persons: ', olderPersons)

/*
 * Map */

// function map(arr, callback) {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     result.push(callback(element))
//   }
//   return result
// }

// const olderPersons = map(persons, (person) => ({
//   ...person,
//   age: person.age * 2
// }))

// console.log('Older persons: ', olderPersons)

/*
 * My Map*/

Array.prototype.myMap = function myMap(callback) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    result.push(callback(element))
  }
  return result
}

const olderPersons = persons.myMap((person) => ({
  ...person,
  age: person.age * 2
}))

console.log('Older persons: ', olderPersons)

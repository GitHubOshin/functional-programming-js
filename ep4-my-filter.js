/*
 * EP 4 : My function*/

const persons = [
  { name: 'John', age: 17 },
  { name: 'Jane', age: 10 },
  { name: 'Jim', age: 15 }
]

/*
 *Filter Function */

// const kids = persons.filter((person) => person.age <= 15)

// console.log('Kids : ', kids) // Kids :  [ { name: 'Jane', age: 10 }, { name: 'Jim', age: 15 } ]

// function myFilter(arr, callback) {
//   const result = []
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i]
//     if (callback(element)) {
//       result.push(element)
//     }
//   }
//   return result
// }

// const kids = myFilter(persons, (person) => person.age <= 15)

// console.log('Kids : ', kids)

/*
 * My Filter */

Array.prototype.myFilter = function myFilter(callback) {
  const result = []
  for (let i = 0; i < this.length; i++) {
    const element = this[i]
    if (callback(element)) {
      result.push(element)
    }
  }
  return result
}

const kids = persons.myFilter((person) => person.age <= 15)

console.log('Kids : ', kids)

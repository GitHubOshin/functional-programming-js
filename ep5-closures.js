/*
 * EP 5 : Closures */

/*
 * What's Closures? */

function outer() {
  const name = 'Outer'
  return function inner() {
    console.log('Outer name : ', name)
  }
}

const innerFunction = outer()

innerFunction()

/*
 * Data Privacy */

function createTimes() {
  let counter = 0
  return function times() {
    counter += 1
    console.log('Counter: ', counter)
  }
}

const times = createTimes()
times()
times()
times()

/*
 * Stateful functions */

// function addFive(params) {
//   return params + 5
// }

// function addTen(params) {
//   return params + 10
// }

function createAdd(a) {
  return function (b) {
    return a + b
  }
}

const addFive = createAdd(5)
const addTen = createAdd(10)

console.log('Add Five :', addFive(10))
console.log('Add Ten :', addTen(10))

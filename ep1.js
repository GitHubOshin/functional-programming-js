// 1. Pure Function

function addPureFn(a, b) {
  return a + b
}

console.log('Pure Function :', addPureFn(1, 2))

// 2. Avoid Side Effect

const b = 6
function addASF(p) {
  return p + b
}

console.log('Avoid Side Effect :', addASF(1))

/**
 * *3. First class function
 *
 *   *3.1 Assigning a function to a variable*/

function addAssigning(a, b) {
  return a + b
}

console.log('Assigning :', addAssigning(1, 6))

/**
 *    *3.2 Returning a function*/

function addReturning(a, b) {
  return function () {
    return a + b
  }
}

const addTwoNumber = addReturning(1, 6)
console.log('Returning :', addTwoNumber())

/**
 *   *Accepting a function as an argument*/

function addNumber(a, b) {
  return a + b
}

function addAccepting(add, a, b) {
  return add(a + b)
}

console.log('Accepting : ', addAccepting(addNumber, 1, 6))

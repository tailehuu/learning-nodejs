console.log('Welcome to JS Tutorial')

console.log('=============')
console.log('1. Statements')
console.log('=============')

// create a variable: var or let
let x = 1, y = 2, z = 3, name = 'Tai LE'
console.log(x, y, z, name)

// create a variable: const
// like constant
const a = 1
const car = {
  name: 'Vario',
  color: 'Red'
}
car.name = 'AirBlade'
console.log(car)

// naming, case sensitive and camel case
let fullName = 'Tai', $love = 'love', _beer = 'Tiger'
console.log(fullName, $love, _beer)

// global scope, function scope and block scope
// block scope: let

// - typeof
// - instanceof

console.log('=============')
console.log('2. Data Types')
console.log('=============')

// string, number, boolean, array, object
name = 'Tai'
let n = 3
let flag = true
let arr = [1, 2, 3]
let person = { name: 'Tai', age: 42 }
console.log(typeof name)
console.log(typeof n)
console.log(typeof flag)
console.log(typeof arr)
console.log(typeof person)
let temp = 'hello world'.padStart(4, 'x')
console.log(temp)

console.log('=============')
console.log('3. String Methods')
console.log('=============')
console.log('.length, .trim, .trimStart, .trimEnd, .trimLeft, .trimRight, .toString, .toUpperCase, .toLowerCase')
console.log('.concat, .substr, substring, .replace, .split, .chatAt')

console.log('=============')
console.log('4. Template Literals')
console.log('=============')
firstName = 'Tai'
lastName = 'LE'
fullName = `${firstName} ${lastName}`
console.log(fullName)

let txt = `
This is a first line.
This is a second line.
`
console.log(txt)

console.log('=============')
console.log('4. Array')
console.log('=============')

console.log('.length, .pop(), .push(), .shift, .unshift, .splice, .slice, Array.isArray()')
console.log('.sort, .map, .filter, .reduce, .includes, .entries, .keys, .some, .every')
console.log('Math.max.apply(null, array)')

array = [1, 2, 3, 4, 5]
console.log(array)
array.forEach((value, index) => {
  console.log('value: ', value, 'index:', index)
})

console.log('sum', array, '=', array.reduce((total, value) => {
  return total + value
}))

let salaries = [
  {
    company: 'TINYpulse',
    salary: 10
  }, {
    company: 'Quoine',
    salary: 8
  }, {
    company: 'Infonam',
    salary: 15
  }
]
salaries.forEach((val) => {
  console.log(val.company, val.salary)
})

console.log('sort', '\n', salaries)
console.log('asc sorted', '\n', salaries.sort((a, b) => { return a.salary - b.salary }))
console.log('desc sorted', '\n', salaries.sort((a, b) => { return b.salary - a.salary }))

console.log('=============')
console.log('5. Date')
console.log('=============')

console.log('.toString, .toUTCString, .toDateString, .toISOString, Date.parse(str)')

console.log(new Date(9, 4, 18))
console.log(new Date(99, 4, 18))
console.log(new Date(2022, 4, 18))
console.log(new Date('2022-4-18'))
console.log(new Date('18 Apr 1981'))
console.log(new Date(0))

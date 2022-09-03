const _ = require('lodash')
const car = require('./car')

console.log('car', car)

// reverse
const array = [1, 2, 3]
console.log('array', array)

let reverse_array = _.reverse(array)
console.log('reverse array', reverse_array)

// reduce
let sum = _.reduce(array, function (sum, n) { return sum + n }, 0)
console.log('sum', sum)

// sum
sum = _.sum(array)
console.log('sum', sum)

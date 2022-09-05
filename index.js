const fs = require('fs')
const Path = require('path')
const process = require('process')

// node index.js --date=2022-04-18 --token=BTC
const argv = require('minimist')(process.argv.slice(2))
console.log('argv: ', argv)
console.log('date: ', argv.date)
console.log('token: ', argv.token)


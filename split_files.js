const fs = require('fs')
const { parse } = require('csv-parse')
const process = require('process')

const readStream = fs.createReadStream('./data/transactions.csv').pipe(parse({ delimiter: ',', fromLine: 2 }))

readStream.on('data', function(row) {
  const createdAt = new Date(parseInt(row[0]) * 1000),
        path = './data/transactions/' + createdAt.getFullYear() + '/' + (createdAt.getMonth() + 1) + '/' + createdAt.getDate(),
        transaction = '\n' + row.join(',')
  createReportFile(path, transaction)
})

readStream.on('error', function (error) {
  console.log(error.message)
})

readStream.on('end', function () {
  for (const [key, value] of Object.entries(process.memoryUsage())){
    console.log(`Memory usage by ${key}, ${value/1000000} MB`)
  }
})

function createReportFile(path, transaction) {
  const fileName = `${path}/transactions.csv`,
        header = 'timestamp,transaction_type,token,amount'
  try {
    if (fs.existsSync(path)) {
      fs.appendFileSync(fileName, transaction, 'utf-8')
    } else {
      fs.mkdirSync(path, { recursive: true })
      fs.appendFileSync(fileName, header, 'utf-8')
      fs.appendFileSync(fileName, transaction, 'utf-8')
    }
    console.log(`inserted ${transaction}`)
  } catch(err) {
    console.log('Error appending data to file in sync mode', err);
  }
}

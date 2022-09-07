const https = require('https')

const options = {
  hostname: 'gorest.co.in',
  port: 443,
  path: '/public/v2/users',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const request = https.request(options, res => {
  console.log('status code: ', res.statusCode)

  res.on('data', data => {
    console.log(data)
  })
})

request.on('error', error => {
  console.error(error)
})

request.end()

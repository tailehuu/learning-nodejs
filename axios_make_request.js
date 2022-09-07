const axios = require('axios')

let baseUrl = 'https://gorest.co.in'

const getUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/public/v2/users`)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const getFirstUserDetail = async () => {
  const response = await axios.get(`${baseUrl}/public/v2/users`)
  const users = await response.data
  const user = users[0]
  const userResponse = await axios.get(`${baseUrl}/public/v2/users/${user.id}`)

  console.log(`user ID ${user.id} detail:`)
  console.log(userResponse.data)
}

getUsers()
  .then(data => console.log(data))
  .catch(error => console.error(error))

getFirstUserDetail()



const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const numberOfUsers = await User.query().resultSize()
  console.log(numberOfUsers)

  // Get the average age of users
  const averageAge = await User.query().avg('age as avgAge')
  console.log(averageAge)

  // Get the total number of dogs
  const numberOfDogs = await Pet.query().where('type', 'DOG').resultSize()
  console.log(numberOfDogs)

  // -----
  cleanup()
}

run()

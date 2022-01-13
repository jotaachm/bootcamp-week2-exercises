const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = (async () => {
  // Write Queries and Logs Here !!!
  const allUsers = await User.query()
  console.log(allUsers)

  // Get all pets
  const pets = await Pet.query()
  console.log(pets)

  // Get the name and age of all users
  const nameAge = await User.query().select('firstName', 'age')
  console.log(nameAge)
  // ------
  cleanup()
})

run()

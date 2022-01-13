const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const sheldon = await User.query().where('firstName', 'Sheldon')
  console.log(sheldon)

  // Do the same with object notation
  const sheldonObject = await User.query().where({ firstName: 'Sheldon' })
  console.log(sheldonObject)

  // Get all DOGS and BIRDS
  const dogsAndBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogsAndBirds)
  // -----
  cleanup()
}

run()

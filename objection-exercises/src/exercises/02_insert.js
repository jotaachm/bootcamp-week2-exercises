const cleanup = require('../lib/cleanup')
const Pet = require('../models/Pet')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const me = await User.query().insert({
    email: 'jchamorro@college.harvard.edu',
    firstName: 'Jota',
    lastName: 'Chamorro',
    age: '19'
  }).returning('*')
  console.log(me)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  // 93a61f3e-8e5f-48f1-a791-8319900b069c
  const myPet = await Pet.query().insert({
    ownerId: '93a61f3e-8e5f-48f1-a791-8319900b069c',
    type: 'FISH',
    name: 'Jay'
  }).returning('*')
  console.log(myPet)

  // -----
  cleanup()
}

run()

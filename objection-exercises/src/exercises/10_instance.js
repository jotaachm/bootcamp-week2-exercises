const cleanup = require('../lib/cleanup')
const casual = require('casual')
const User = require('../models/User')

// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const me = await User.query().findById('d26b44a8-0d05-4540-a9ed-7551c7d924de')

  // Use that instance to create a new pet related that user
  const newPet = await me.$relatedQuery('pets').insert({
    id: casual.uuid,
    ownerId: me.id,
    type: 'DOG',
    name: Jay,
  }).returning('*')

  // Use that instance to get all of the user's pets and children
  const everythingAboutMe = await me.$fetchGraph('[pets, children]')
  console.log(everythingAboutMe)
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  // -----
  cleanup()
}

run()

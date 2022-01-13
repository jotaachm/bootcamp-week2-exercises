const cleanup = require('../lib/cleanup')
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // // Get all users and their pets
  // const usersAndPets = await User.query().withGraphFetched('pets')
  // console.dir(usersAndPets, { depth: 3 })

  // // Get all users, their pets, AND their children
  // const petsAndChildren = await User.query().withGraphFetched('[pets, children]')
  // console.dir(petsAndChildren, { depth: 3 })

  // Get all users, their parents, and their grandparents
  const wholeFamily = await User.query().withGraphFetched('parents.^2')
  // // const wholeFamily = await User.query().withGraphFetched('[parents, parents.parents]')
  console.dir(wholeFamily, { depth: 3 })

  // // Get all users, their pets, their children, and their childrens' pets
  const usersPetsChildrenPets = await User.query().withGraphFetched('[pets, children.[pets]]')
  console.dir(usersPetsChildrenPets, { depth: 3 })

  // -----
  cleanup()
}

run()

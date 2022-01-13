const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // reminder of my virtual attributes
  // static get virtualAttributes() {
  //   return ['fullName', 'canDrink']
  // }
  // fullName() {
  //   return `${this.firstName} ${this.lastName}`
  // }
  // canDrink() {
  //   return this.age > 21
  // }

  // Use basic queries to test any virtual attributes you wrote on your models
  const person = await User.query().first()
  console.log(person.fullName())
  console.log(person.canDrink())
  // -----
  cleanup()
}

run()

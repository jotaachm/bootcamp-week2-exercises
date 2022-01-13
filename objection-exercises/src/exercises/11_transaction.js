const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  try {
    const newUser = await User.transaction(async trx => {
      const deanKhurana = await User.query(trx)
        .insert({ firstName: 'Rakesh', lastName: 'Khurana', email: 'deankhurana@harvard.edu' }).returning('*')

      const khuranaPet = await deanKhurana.$relatedQuery('pets', trx)
        .insert({ name: 'Khuri', type: 'DOG' })

      const numberOfPets = await Pet.query(trx).resultSize()
      if (numberOfPets > 15) {
        const deleteBirds = await Pet.query(trx).delete().where({ type: 'BIRD' })
      }
      return khuranaPet
    })
  } catch (err) {
    console.log(err)
    throw new Error('This is an error')
  }
  // -----
  cleanup()
}

run()

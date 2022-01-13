const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ user1Id, user2Id }) => ({
    id: casual.uuid,
    requestorId: user1Id,
    requestedId: user2Id,
    dateRequested: casual.date(),
    status: casual.random_element(['accepted', 'rejected', 'pending'])
}))

const friendData = []

for (let i = 0; i < 15; i += 1) {
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    friendData.push(casual.friend({ user1Id, user2Id }))
}

console.log(friendData)

module.exports = friendData
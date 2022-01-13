const casual = require('casual')
const userData = require('./users')

casual.define('message', ({ user1Id, user2Id }) => ({
    id: casual.uuid,
    messageContent: casual.sentence,
    senderId: user1Id,
    recipientId: user2Id,
}))

const messageData = []

for (let i = 0; i < 30; i += 1) {
    const user1Id = casual.random_element(userData).id
    const user2Id = casual.random_element(userData).id
    messageData.push(casual.message({ user1Id, user2Id }))
}

console.log(messageData)

module.exports = messageData
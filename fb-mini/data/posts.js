const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ userId }) => ({
    id: casual.uuid,
    userId: userId,
    postContent: casual.sentence,
    datePosted: casual.date(),
}))

const postData = []

for (let i = 0; i < 15; i += 1) {
    const userId = casual.random_element(userData).id
    postData.push(casual.post({ userId }))
}

console.log(postData)


module.exports = postData
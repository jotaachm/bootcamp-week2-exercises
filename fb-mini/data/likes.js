const casual = require('casual')
const friendData = require('./friends')
const postData = require('./posts')

casual.define('like', ({ likerId, postId }) => ({
    id: casual.uuid,
    likerId: likerId,
    postId: postId,
}))

const likeData = []

for (let i = 0; i < 30; i += 1) {
    const postId = casual.random_element(postData).id

    // ensures the post is being like by a friend of the user posting
    user_id = postData.filter(post => {
        return post.id === postId
    })[0].userId
    friendships = friendData.filter(relation => {
        return ((relation.requestorId === user_id || relation.requestedId === user_id) && relation.status === 'accepted')
    })
    let user_friends = []
    for (let i = 0; i < friendships.length; i++) {
        if (friendships[i].requestorId == user_id) {
            user_friends.push(friendships[i].requestedId)
        }
        else if (friendships[i].requestedId == user_id) {
            user_friends.push(friendships[i].requestorId)
        }
    }
    if (user_friends.length === 0) {
        continue;
    }
    const likerId = casual.random_element(user_friends)
    likeData.push(casual.like({ likerId, postId }))
}

console.log(likeData)

module.exports = likeData
const users = [
    {
        id: '1ee674d6-f1cd-4e5c-b9f9-181b9f2dcdb9',
        email: 'Newton_Williamson@Leannon.com',
    },
    {
        id: '58b08365-ffc4-4637-96fd-77457e0c9240',
        email: 'Elsie.Gorczany@gmail.com',
    },
    {
        id: '562afa34-4085-4624-91af-242415f3a399',
        email: 'Klein.Lourdes@gmail.com',
    },
    {
        id: 'd77848a4-b525-4087-8aad-72642f635174',
        email: 'Sanford_Connelly@gmail.com',
    },
    {
        id: 'c9ac2b8f-5ded-475a-98e1-7d1c048e3880',
        email: 'Vernie.Connelly@Curt.name',
    }
]

const friends = [
    {
        id: 'f7be496b-1c19-455c-82cb-9277730ac769',
        requestorId: '58b08365-ffc4-4637-96fd-77457e0c9240',
        requestedId: 'c9ac2b8f-5ded-475a-98e1-7d1c048e3880',
        dateRequested: '1970-11-27',
        status: 'accepted'
    },
    {
        id: '82372bd5-c1df-438f-9266-65fd6360bb7b',
        requestorId: 'd77848a4-b525-4087-8aad-72642f635174',
        requestedId: 'd77848a4-b525-4087-8aad-72642f635174',
        dateRequested: '1978-11-19',
        status: 'pending'
    },
    {
        id: '355172bc-74bb-4fa9-83fa-58201733eaed',
        requestorId: '1ee674d6-f1cd-4e5c-b9f9-181b9f2dcdb9',
        requestedId: '58b08365-ffc4-4637-96fd-77457e0c9240',
        dateRequested: '1996-05-19',
        status: 'accepted'
    },
    {
        id: '5d89ed50-2f39-4a28-91cf-d1f80562ade4',
        requestorId: '1ee674d6-f1cd-4e5c-b9f9-181b9f2dcdb9',
        requestedId: '58b08365-ffc4-4637-96fd-77457e0c9240',
        dateRequested: '1989-08-10',
        status: 'pending'
    },
    {
        id: '25c3665a-4891-43c2-8d6a-ca6af8c09d09',
        requestorId: '1ee674d6-f1cd-4e5c-b9f9-181b9f2dcdb9',
        requestedId: '562afa34-4085-4624-91af-242415f3a399',
        dateRequested: '1984-07-14',
        status: 'rejected'
    }
]

const posts = [
    {
        id: '0da6c81d-3fc0-4415-b62b-6591b804532b',
        userId: '58b08365-ffc4-4637-96fd-77457e0c9240',
        postContent: 'Voluptatem incidunt molestias quos aliquid. Sed fuga id illum velit a. Ab natus neque quod ea ullam. Voluptatem voluptatem suscipit sit eum sequi est quidem ut velit.',
        datePosted: '1985-08-13'
    },
    {
        id: 'eebaf7cf-8b25-4f6e-9c01-5ca45f37b20d',
        userId: '58b08365-ffc4-4637-96fd-77457e0c9240',
        postContent: 'Quo adipisci tempora excepturi. Est eaque est officia cupiditate velit non. Libero tempora quia. Esse aliquid ut quia illum quisquam nostrum. Aut laudantium et consequatur qui magnam culpa quo.',
        datePosted: '1999-05-31'
    },
    {
        id: '8e318e6c-aa82-4478-b2ba-e244aec445b1',
        userId: '562afa34-4085-4624-91af-242415f3a399',
        postContent: 'Sed cupiditate qui similique molestias ut. A et qui et aliquam voluptatem. Sit aut praesentium corporis natus tenetur id odit recusandae. Est velit ut qui porro. Quae quos ad velit voluptate similique.',
        datePosted: '1973-07-04'
    },
    {
        id: '35b06bcb-4237-4676-9e93-d2739ce9d80e',
        userId: '58b08365-ffc4-4637-96fd-77457e0c9240',
        postContent: 'Inventore velit officiis. Qui laudantium quia. Necessitatibus rerum consequuntur. Magni suscipit est laborum quia et aut voluptatibus qui.',
        datePosted: '2014-07-25'
    },
    {
        id: 'da85d7a1-2dbd-4c2e-9af3-34431dfb1f43',
        userId: 'c9ac2b8f-5ded-475a-98e1-7d1c048e3880',
        postContent: 'Sapiente architecto aut et excepturi quis. Commodi et deleniti dolorem. Reiciendis aut tempora ipsam repudiandae voluptas nobis. Ad sint animi tempore ut corporis dolor exercitationem omnis. Commodi qui rerum facilis.',
        datePosted: '2009-07-07'
    }
]

post_id = '0da6c81d-3fc0-4415-b62b-6591b804532b'
user_id = posts.filter(post => {
    return post.id === post_id
})[0].userId
friendships = friends.filter(relation => {
    return ((relation.requestorId === user_id || relation.requestedId === user_id) && relation.status === 'accepted')
})
console.log(friendships)
let user_friends = []
for (let i = 0; i < friendships.length; i++) {
    if (friendships[i].requestorId == user_id) {
        user_friends.push(friendships[i].requestedId)
    }
    else if (friendships[i].requestedId == user_id) {
        user_friends.push(friendships[i].requestorId)
    }
}
console.log(user_friends)
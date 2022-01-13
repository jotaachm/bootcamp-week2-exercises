const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  firstName: casual.first_name,
  lastName: casual.last_name,
  userName: casual.username,
  dob: casual.date(),
  email: casual.email,
  phone: casual.phone,
  password: casual.password,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

console.log(userData)

module.exports = userData

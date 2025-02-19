const connection = require('./connection')
const { generateHash } = require('authenticare/server')

function createUser (user, db = connection) {
  const newUser = {...user}
  return generateHash(newUser.password)
    .then(passwordHash => {
      newUser.hash = passwordHash
      delete newUser.password
      return db('users').insert(newUser)
    })
}

function userExists (username, db = connection) {
  return db('users')
    .where('username', username)
    .then(users => users.length > 0)
}

function getAllUsers(db = connection) {
  return db('users').select()
}

function getUserByUsername (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
}

function updateUser(id, user, db = connection) {
  return db('users').where('id', id).update(user)
}

module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getAllUsers,
  updateUser
}
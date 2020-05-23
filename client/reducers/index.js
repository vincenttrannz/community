import {combineReducers} from 'redux'
// Import your function here
import users from './users'
import auth from './auth'
import profile from './profile'

export default combineReducers({
  auth,
  users,
  profile,
})
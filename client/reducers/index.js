import {combineReducers} from 'redux'
// Import your function here
import users from './users'
import auth from './auth'
import profiles from './profiles'

export default combineReducers({
  auth,
  users,
  profiles,
})
import { RECEIVE_PROFILES } from '../actions/profiles'

const initialState = []

function profiles (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROFILES:
      return action.profiles
    default:
      return state
  }
}

export default profiles
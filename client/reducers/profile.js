import { SET_PROFILE, CREATE_PROFILE_FAILURE, REMOVE_PROFILE } from '../actions/profile'

const initialState = {
  profile: {},
  errorMessage: ''
}

function profile (state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE:
      return {
        profile: action.profile
      }
    case REMOVE_PROFILE:
      return {
        profile: state.profile
      }
    case CREATE_PROFILE_FAILURE:
      return {
        errorMessage: action.message
      }
    default:
      return state
  }
}

export default profile
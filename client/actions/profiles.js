import {getProfiles} from '../api/profiles'

export const RECEIVE_PROFILES = 'RECEIVE_PROFILES'
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE'

export const receiveProfiles = (profiles) => {
  return {
    type: RECEIVE_PROFILES,
    profiles: profiles
  }
}

export function createProfileError (message) {
  return {
    type: CREATE_PROFILE_FAILURE,
    message
  }
}

export function fetchProfiles (){
  return(dispatch) =>{
    getProfiles()
    .then(profiles=>{
      dispatch(receiveProfiles(profiles))
    })
  }
}
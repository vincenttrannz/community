import {addProfile} from '../api/profile'

export const SET_PROFILE = 'SET_PROFILE'
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE'
export const REMOVE_PROFILE = 'REMOVE_PROFILE'


export const setProfile = (profileData) => {
  return {
    type: SET_PROFILE,
    profile: profileData
  }
}

export const removeProfile = () =>{
  return{
    type: REMOVE_PROFILE,
    profile: ''
  }
}

export function createProfileError (message) {
  return {
    type: CREATE_PROFILE_FAILURE,
    message: message
  }
}

export function fetchProfile(profile){
  return(dispatch) =>{
    addProfile(profile)
    .then(dispatch(setProfile(profile)))
    .catch(err => {
      dispatch(createProfileError(err))
    })
  }
}

export function logOutProfile(){
  return(dispatch) =>{
    dispatch(removeProfile())
  }
}
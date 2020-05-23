import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProfileError, fetchProfile} from '../actions/profile'

export class CreateProfile extends Component {
  state = {
    gender: '',
    first_name: '',
    last_name: '',
    birthday: '',
    address: '',
    city: '',
    phone: '',
    zipCode: '',
    image_url: ''
  }

  componentDidMount(){
    this.props.dispatch(createProfileError(''))
  }

  updateDetails = event => {
    console.log(event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  // checkIfNumber = (element) =>{
  //   if(element !== NaN) 
  //   return this.props.dispatch(createProfileError(`${element} need to be checked, please try again`))
  // }

  submit = e => {
    e.preventDefault()
    e.target.reset()
    let {gender, first_name, last_name, birthday, address, city, phone, zipCode, image_url} = this.state

    if (isNaN(phone)) {
      return this.props.dispatch(createProfileError("Phone need to be a number, please try again"))
    }

    if (isNaN(zipCode)) {
      return this.props.dispatch(createProfileError("Zip code need to be a number, please try again"))
    }

    // this.checkIfNumber(gender, first_name, last_name, address, city, image_url)
    console.log(this.state)
    const confirmSuccess = () => { this.props.history.push('/profile') }
    this.props.dispatch(fetchProfile(this.state), confirmSuccess())
  }

  render() {
    return (
      <section id="signIn" className="background-profile page-sign bg-overlay bg-overlay-dark pt-50">
        <div className="container">
          <div className="row bg-gray">
            <div className="col-md-4 sign-icon">
              <i style={{color: 'rgb(57, 142, 236)', fontSize: '12rem'}} className="fas fa-portrait"></i>
              <h5>Create your profile</h5>
              {this.props.profile.errorMessage && <span style={{color: 'brown'}}>{this.props.profiles.errorMessage}</span>}
            </div>
            <div className="col-md-8 sign-form">
              <form onSubmit={this.submit}>
                <div className='inline-form'>
                <div id='gender' className="form-group">
                    <label htmlFor="gender">Gender :</label>
                    {/* <input type="text" name='gender' className="form-control" id="gender" required value={this.state.gender} /> */}
                    <select onChange={this.updateDetails} value={this.state.gender} className='form-control' name="gender" required>
                      <option name='gender' value="Mr">Mr</option>
                      <option name='gender' value="Ms">Ms</option>
                      <option name='gender' value="Miss">Miss</option>
                      <option name='gender' value="Mrs">Mrs.</option>
                    </select>
                  </div>
                  <div id='firstname' className="form-group">
                    <label htmlFor="first_name">First name :</label>
                    <input type="text" name='first_name' className="form-control" id="first_name" required value={this.state.first_name} onChange={this.updateDetails} />
                  </div>
                  <div id='lastname' className="form-group">
                    <label htmlFor="last_name">Last name :</label>
                    <input type="test" name='last_name' className="form-control" id="last_name" required value={this.state.last_name} onChange={this.updateDetails}/>
                  </div>
                </div>
                <div className='inline-form'>
                  <div id='phone' className="form-group">
                    <label htmlFor="phone">Phone :</label>
                    <input type='tel' name='phone' className="form-control" id="phone" required value={this.state.phone} onChange={this.updateDetails}/>
                  </div>
                  <div id='birthday' className="form-group">
                    <label htmlFor="birthday">Date of birth :</label>
                    <input type='date' name='birthday' className="form-control" id="birthday" required value={this.state.birthday} onChange={this.updateDetails}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address :</label>
                  <input type="text" name='address' className="form-control" id="address" required value={this.state.address} onChange={this.updateDetails}/>
                </div>
                <div className='inline-form'>
                  <div id='city' className="form-group">
                    <label htmlFor="city">City :</label>
                    <input type="text" name='city' className="form-control" id="city" required value={this.state.city} onChange={this.updateDetails}/>
                  </div>
                  <div id='zipCode' className="form-group">
                    <label htmlFor="zipCode">Postal Code :</label>
                    <input type="number" name='zipCode' className="form-control" id="zipCode" required value={this.state.zipCode} onChange={this.updateDetails}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="image_url">Your image URL :</label>
                  <input type="text" name='image_url' className="form-control" id="image_url" value={this.state.image_url} onChange={this.updateDetails}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(globalState){
  console.log(globalState)
  return{
    profile: globalState.profile
  }
}

export default connect(mapStateToProps)(CreateProfile)

import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addProfile} from '../api/profiles'
import {createProfileError} from '../actions/profiles'

export class Profile extends Component {
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

  updateDetails = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  checkIfNumber = (element) =>{
    if(element !== NaN) 
    return this.props.dispatch(createProfileError(`${element} need to be checked, please try again`))
  }

  submit = e => {
    e.preventDefault()
    e.target.reset()
    let {gender, first_name, last_name, birthday, address, city, phone, zipCode, image_url} = this.state
    console.log(this.state)

    if (phone == NaN) {
      return this.props.dispatch(createProfileError("Phone need to be a number, please try again"))
    }

    if (zipCode == NaN) {
      return this.props.dispatch(createProfileError("Zip code need to be a number, please try again"))
    }

    this.checkIfNumber(gender, first_name, last_name, address, city, image_url)

    const confirmSuccess = () => { this.props.history.push('/hello') }

    addProfile(this.state, confirmSuccess())
  }

  render() {
    return (
      <section id="signIn" className="background-profile page-sign bg-overlay bg-overlay-dark pt-50">
        <div className="container">
          <div className="row bg-gray">
            <div className="col-md-4 sign-icon">
              <i style={{color: 'rgb(57, 142, 236)', fontSize: '12rem'}} className="fas fa-portrait"></i>
              <h5>Create your profile</h5>
              {}
            </div>
            <div className="col-md-8 sign-form">
              <form onSubmit={this.submit}>
                <div className='inline-form'>
                <div id='gender' className="form-group">
                    <label htmlFor="gender">Gender :</label>
                    {/* <input type="text" name='gender' className="form-control" id="gender" required onChange={this.updateDetails} value={this.state.gender} /> */}
                    <select className='form-control' onChange={this.updateDetails} name="gender" id="" required>
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Miss">Miss</option>
                      <option value="Mrs">Mrs.</option>
                    </select>
                  </div>
                  <div id='firstname' className="form-group">
                    <label htmlFor="first_name">First name :</label>
                    <input type="text" name='first_name' className="form-control" id="first_name" required onChange={this.updateDetails} value={this.state.first_name} />
                  </div>
                  <div id='lastname' className="form-group">
                    <label htmlFor="last_name">Last name :</label>
                    <input type="test" name='last_name' className="form-control" id="last_name" required onChange={this.updateDetails} value={this.state.last_name} />
                  </div>
                </div>
                <div className='inline-form'>
                  <div id='phone' className="form-group">
                    <label htmlFor="phone">Phone :</label>
                    <input type='tel' name='phone' className="form-control" id="phone" required onChange={this.updateDetails} value={this.state.phone} />
                  </div>
                  <div id='birthday' className="form-group">
                    <label htmlFor="birthday">Date of birth :</label>
                    <input type='date' name='birthday' className="form-control" id="birthday" required onChange={this.updateDetails} value={this.state.birthday} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address :</label>
                  <input type="text" name='address' className="form-control" id="address" required onChange={this.updateDetails} value={this.state.address} />
                </div>
                <div className='inline-form'>
                  <div id='city' className="form-group">
                    <label htmlFor="city">City :</label>
                    <input type="text" name='city' className="form-control" id="city" required onChange={this.updateDetails} value={this.state.city} />
                  </div>
                  <div id='zipCode' className="form-group">
                    <label htmlFor="zipCode">Postal Code :</label>
                    <input type="number" name='zipCode' className="form-control" id="zipCode" required onChange={this.updateDetails} value={this.state.zipCode} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="image_url">Your image URL :</label>
                  <input type="text" name='image_url' className="form-control" id="image_url" onChange={this.updateDetails} value={this.state.image_url} />
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
    globalState
  }
}

export default connect(mapStateToProps)(Profile)

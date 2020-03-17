import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Axios from 'axios';

export default class SignIn extends Component {

  constructor(){
    super()
    this.state={
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    // console.log(e.name, e.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    Axios.post("https://cors-anywhere.herokuapp.com/https://conduit-campus.herokuapp.com/api/v1/users/login",{...this.state})
    .then(res => {
      if(res.data.success == true){
        localStorage.setItem('token', res.data.token)
        window.location.href = '/'
      }
      if(res.data.success == false){
        console.log("invalid credentials")
      }
      this.setState({
        email: '',
        password: ''
      })

    })
    .catch(err => console.log(err))
  }

  render(){
  return (
    <>
    <div className="container">
      <h3 className="log">SignIn</h3>
    <form>
    <div className="form">
      <input className="input" type="email" placeholder="email" name='email' value={this.state.email} onChange={this.handleChange} />
      <input className="input" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} />
      <Button color="primary" size="large" type="submit" variant="contained" onClick={this.handleSubmit}> Submit </Button>
      </div>
    </form>
    </div>
    </>
  );
  }
}

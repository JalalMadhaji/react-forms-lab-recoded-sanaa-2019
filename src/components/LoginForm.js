import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  onSubmit = event =>{
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.handleLogin({username:this.state.username,password:this.state.password})
    }
  }

  handleInputChange = event =>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleInputChange(event)} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={event => this.handleInputChange(event)} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

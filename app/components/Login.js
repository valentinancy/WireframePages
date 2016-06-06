import React from 'react';
import LoginCover from './login/LoginCover';
import LoginForm from './login/LoginForm';

class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="col-md-7">
          <LoginCover/>
        </div>
        <div className="col-md-5">
          <LoginForm  history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default Login

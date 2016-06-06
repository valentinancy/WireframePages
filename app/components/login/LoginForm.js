import React from 'react';

class LoginForm extends React.Component {
  handleLogin() {
    this.props.history.pushState(null,"home")
  }

  render() {
    return (
      <div className="login-form">
        <div className="login-container bg-white">
          <div className="p-l-50 m-l-20 p-r-50 m-r-20 p-t-50 m-t-30 sm-p-l-15 sm-p-r-15 sm-p-t-40">
            <img src="assets/img/logo.png" alt="logo"width="78" height="22"/>
            <p className="p-t-35">Sign into your pages account</p>
              <div className="form-group form-group-default">
                <label>Login</label>
                <div className="controls">
                  <input type="text" placeholder="User Name" className="form-control"/>
                </div>
              </div>
              <div className="form-group form-group-default">
                <label>Password</label>
                <div className="controls">
                  <input type="password" className="form-control" placeholder="Credentials"/>
                </div>
              </div>
              <button onClick={() => this.handleLogin()} className="btn btn-primary m-t-10">Sign in</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm

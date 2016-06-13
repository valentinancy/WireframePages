import React from 'react';

class Logout extends React.Component {
  handleLogout() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="logout text-center">
        <button className="btn btn-block btn-default" onClick={() => this.handleLogout()}>Log out </button>
      </div>
    )
  }
}

export default Logout

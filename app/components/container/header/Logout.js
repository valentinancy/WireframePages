import React from 'react';

class Logout extends React.Component {
  handleLogout() {
    this.context.router.push('/')
  }

  render() {
    return (
      <div className="logout text-center">
        <button className="btn btn-block btn-default" onClick={() => this.handleLogout()}>Log out </button>
      </div>
    )
  }
}

Logout.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Logout

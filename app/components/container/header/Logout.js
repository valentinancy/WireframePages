import React from 'react';

class Logout extends React.Component {
  handleLogout() {
    //sessionStorage.clear();
    // setInterval( () => router.transitionTo('/'), 1000);
    this.props.history.pushState(null,'/')
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

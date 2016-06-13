import React from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';
import ProfileBar from './ProfileBar';
import Logout from './Logout';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <div className="header-logo col-md-2">
          <img src="assets/img/logo.png" alt="logo" data-src="assets/img/logo.png" data-src-retina="assets/img/logo_2x.png" width="78" height="22"></img>
        </div>
        <div className="col-md-2">
          <MenuBar />
        </div>
        <div className="col-md-2">
          <SearchBar />
        </div>
        <div className="col-md-4">
          <ProfileBar username={this.props.username}/>
        </div>
        <div className="col-md-1">
          <Logout history={this.props.history}/>
        </div>
      </div>
    )
  }
}

export default Header

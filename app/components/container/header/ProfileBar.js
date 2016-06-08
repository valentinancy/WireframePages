import React from 'react';

class ProfileBar extends React.Component {
  render() {
    return (
      <div className="header-profilebar">
        <div className="pull-left p-r-1 p-t-10 fs-16 font-heading col-md-6">
          <span className="semi-bold">{this.props.username}</span>
        </div>
        <div className="col-md-2">
          <button className="profile-dropdown-toggle" type="button">
            <span className="thumbnail-wrapper d32 circular inline m-t-5">
              <img src="assets/img/profiles/avatar.jpg" alt="" width="32" height="32"/>
            </span>
          </button>
        </div>
        <div className="col-md-1">
          <a href="#"><span className="icon-set menu-hambuger header-profileber-menuhamburger"></span></a>
        </div>
      </div>
    )
  }
}

export default ProfileBar

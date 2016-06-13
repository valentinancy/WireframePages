import React from 'react';
import {Link} from 'react-router';

class Sidebar extends React.Component {
  render() {
    return(
      <div className="sidebar">
        <div className="sidebar-header sidebar-header-custom">
        </div>
        <div className="header-first-list-sidebar">
        </div>
        <div className="sidebar-menu sidebar-menu-custom">
          <ul className="menu-items ul-style">
            <div className="list-sidebar">
              <Link to={`home/${this.props.username}`}>
                <li className=""><span className="icon-thumbnail"><i className="pg-home"></i></span></li>
              </Link>
            </div>
            <div className="list-sidebar">
              <Link to={`home/${this.props.username}/widget/${this.props.username}`}>
                <li className=""><span className="icon-thumbnail">W</span></li>
              </Link>
            </div>
            <div className="list-sidebar">
              <Link to={`home/${this.props.username}/email/${this.props.username}`}>
                <li><span className="icon-thumbnail"><i className="pg-mail"></i></span></li>
              </Link>
            </div>
            <div className="list-sidebar">
              <Link to={`home/${this.props.username}/social/${this.props.username}`}>
                <li><span className="icon-thumbnail"><i className="pg-social"></i></span></li>
              </Link>
            </div>
            <div className="list-sidebar">
              <Link to={`home/${this.props.username}/calendar/${this.props.username}`}>
                <li><span className="icon-thumbnail" ><i className="pg-calender"></i></span></li>
              </Link>
            </div>
          </ul>
        </div>
      </div>

    )
  }
}

export default Sidebar

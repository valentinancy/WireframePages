import React from 'react';

class Sidebar extends React.Component {
  handleClickWidget() {
    this.props.history.pushState(null,"widget")
  }

  handleClickEmail() {
    this.props.history.pushState(null,"email")
  }

  handleClickSocial() {
    this.props.history.pushState(null,"social")
  }

  handleClickCalendar() {
    this.props.history.pushState(null,"calendar")
  }

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
              <a href=''><li className=""><span className="icon-thumbnail"><i className="pg-home"></i></span></li></a>
            </div>
            <div className="list-sidebar">
              <li className=""><a href='' className="detailed"><span className="icon-thumbnail" onClick={() => this.handleClickWidget()}>W</span></a></li>
            </div>
            <div className="list-sidebar">
              <a href=''><li><span className="icon-thumbnail" onClick={() => this.handleClickEmail()}><i className="pg-mail"></i></span></li></a>
            </div>
            <div className="list-sidebar">
              <a href=''><li><span className="icon-thumbnail" onClick={() => this.handleClickSocial()}><i className="pg-social"></i></span></li></a>
            </div>
            <div className="list-sidebar">
              <a href=''><li><span className="icon-thumbnail" onClick={() => this.handleClickCalendar()}><i className="pg-calender"></i></span></li></a>
            </div>
          </ul>
        </div>
      </div>

    )
  }
}

export default Sidebar

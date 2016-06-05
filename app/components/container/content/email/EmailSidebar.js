import React from 'react';

class EmailSidebar extends React.Component {
  render() {
    return(
      <div className="email-sidebar">
      <div className="secondary-sidebar padding-30">
          <a href="#" className="btn btn-complete btn-block btn-compose m-b-30">Compose</a>
          <p className="menu-title">BROWSE</p>
          <ul className="main-menu">
            <li className="active">
              <a href="#">
                <span className="title"><i className="pg-inbox"></i> Inbox</span>
                <span className="badge pull-right">5</span>
              </a>
            </li>
            <li className="">
              <a href="#">
                <span className="title"><i className="pg-folder"></i> All mail</span>
              </a>
              <ul className="sub-menu no-padding">
                <li>
                  <a href="#">
                    <span className="title">Important</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="title">Labeled</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span className="title"><i className="pg-sent"></i> Sent</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="title"><i className="pg-spam"></i> Spam</span>
                <span className="badge pull-right">10</span>
              </a>
            </li>
          </ul>
          <p className="menu-title m-t-20 all-caps">Quick view</p>
          <ul className="sub-menu no-padding">
            <li>
              <a href="#">
                <span className="title">Documents</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="title">Flagged</span>
                <span className="badge pull-right">5</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="title">Images</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default EmailSidebar

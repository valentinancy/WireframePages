import React from 'react';
import Sidebar from './Sidebar';
import Header from './header/Header';

class Home extends React.Component {
  render() {
    return(
      <div className="main-container">
        <div className="col-md-1">
          <Sidebar history={this.props.history} username={this.props.params.username}/>
        </div>
        <div className="col-md-11">
          <div className="row">
            <Header username={this.props.params.username} />
          </div>
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Home

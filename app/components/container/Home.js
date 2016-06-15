import React from 'react';
import Sidebar from './Sidebar';
import Header from './header/Header';
import {tokenverify} from '../../utils/helpers';

class Home extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    tokenverify(token)
    .catch((res) => {
      this.props.history.push('/')
    })
  }

  render() {
    return(
      <div className="main-container">
        <div className="col-md-1">
          <Sidebar history={this.props.history} username={this.props.params.username}/>
        </div>
        <div className="col-md-11">
          <div className="row">
            <Header history={this.props.history} username={this.props.params.username} />
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

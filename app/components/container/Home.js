import React from 'react';
import Sidebar from './Sidebar';
import Header from './header/Header';
import {tokenverify} from '../../utils/helpers';

class Home extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem('token')
    tokenverify(token)
    .catch((res) => {
      this.context.router.push('/')
    })
  }

  render() {
    return(
      <div className="main-container">
        <div className="col-md-1">
          <Sidebar username={this.props.params.username}/>
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

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Home

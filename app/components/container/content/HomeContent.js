import React from 'react';
import BigBox from './home/BigBox';
import BlueBox from './home/BlueBox';
import PurpleBox from './home/PurpleBox';
import ToscaBox from './home/ToscaBox';
import GreyBox from './home/GreyBox';

class HomeContent extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="col-md-6">
          <a href=''><BigBox /></a>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-6">
              <a href=''><PurpleBox /></a>
            </div>
            <div className="col-md-6">
              <a href="#"><BlueBox /></a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <a href=''><GreyBox /></a>
            </div>
            <div className="col-md-6">
              <a href=''><ToscaBox /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContent

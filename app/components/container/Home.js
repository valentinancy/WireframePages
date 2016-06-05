import React from 'react';
import BigBox from './content/home/BigBox';
import BlueBox from './content/home/BlueBox';
import PurpleBox from './content/home/PurpleBox';
import ToscaBox from './content/home/ToscaBox';
import GreyBox from './content/home/GreyBox';

class Home extends React.Component {
  render() {
    console.log('hai')
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
              <a href=''><BlueBox /></a>
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

export default Home

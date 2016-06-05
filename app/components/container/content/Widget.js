import React from 'react';
import PurpleBox from './home/PurpleBox';
import BlueBox from './home/BlueBox';
import GreyBox from './home/GreyBox';
import ToscaBox from './home/ToscaBox';

class Widget extends React.Component {
  render() {
    return (
      <div className="widget">
      <div className="row">
        <div className="col-md-3">
          <a href=''><PurpleBox /></a>
        </div>
        <div className="col-md-3">
          <a href=''><BlueBox /></a>
        </div>
        <div className="col-md-3">
          <a href=''><PurpleBox /></a>
        </div>
        <div className="col-md-3">
          <a href=''><BlueBox /></a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <a href=''><ToscaBox /></a>
        </div>
        <div className="col-md-3">
          <a href=''><GreyBox /></a>
        </div>
        <div className="col-md-3">
          <a href=''><ToscaBox /></a>
        </div>
        <div className="col-md-3">
          <a href=''><GreyBox /></a>
        </div>
      </div>
      </div>
    )
  }
}

export default Widget

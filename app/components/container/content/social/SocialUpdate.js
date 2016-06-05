import React from 'react';

class SocialUpdate extends React.Component {
  render() {
    return(
      <div className="social-update">
        <div className="card share  col1" data-social="item">
          <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
          </div>
          <div className="card-header clearfix">
            <div className="user-pic">
              <img alt="Profile Image" width="33" height="33" src="assets/img/profiles/6x.jpg"/>
            </div>
            <h5>Nathaniel Hamilton</h5>
            <h6>Shared a Tweet
              <span className="location semi-bold"><i class="icon-map"></i>  NYC, New York</span>
              </h6>
          </div>
          <div className="card-description">
            <p>Testing can show the presense of bugs, but not their absence.</p>
            <div className="via">via Twitter</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialUpdate

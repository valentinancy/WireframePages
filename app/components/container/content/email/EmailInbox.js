import React from 'react';

class EmailInbox extends React.Component {
  render() {
    return (
      <div className="email-inbox">
        <div className="card share  col1" data-social="item">
          <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
          </div>
          <div className="card-header clearfix">
            <div className="user-pic">
              <img alt="Profile Image" width="33" height="33" src="assets/img/profiles/6x.jpg"/>
            </div>
            <h5>Nathaniel Hamilton</h5>
            <span className="location semi-bold"><i class="icon-map"></i>Friday, 5.10 pm</span>
          </div>
          <div className="card-description">
            <p>Okay kalo tidak mau balas tidak apa apa</p>
          </div>
        </div>
        <div className="card share  col1" data-social="item">
          <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
          </div>
          <div className="card-header clearfix">
            <div className="user-pic">
              <img alt="Profile Image" width="33" height="33" src="assets/img/profiles/6x.jpg"/>
            </div>
            <h5>Nathaniel Hamilton</h5>
            <span className="location semi-bold"><i class="icon-map"></i>Friday, 5.06 pm</span>
          </div>
          <div className="card-description">
            <p>test! halo! email saya masuk tidak ya?</p>
          </div>
        </div>
        <div className="card share  col1" data-social="item">
          <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
          </div>
          <div className="card-header clearfix">
            <div className="user-pic">
              <img alt="Profile Image" width="33" height="33" src="assets/img/profiles/6x.jpg"/>
            </div>
            <h5>Nathaniel Hamilton</h5>
            <span className="location semi-bold"><i class="icon-map"></i>Friday, 5.05 pm</span>
          </div>
          <div className="card-description">
            <p>Haloooo?</p>
          </div>
        </div>
        <div className="card share  col1" data-social="item">
          <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
          </div>
          <div className="card-header clearfix">
            <div className="user-pic">
              <img alt="Profile Image" width="33" height="33" src="assets/img/profiles/6x.jpg"/>
            </div>
            <h5>Nathaniel Hamilton</h5>
            <span className="location semi-bold"><i class="icon-map"></i>Friday, 5.02 pm</span>
          </div>
          <div className="card-description">
            <p>Kok email saya tidak dibalas ya</p>
          </div>
        </div>
        <div className="card share  col1" data-social="item">
          <div className="circle" data-toggle="tooltip" title="Label" data-container="body">
          </div>
          <div className="card-header clearfix">
            <div className="user-pic">
              <img alt="Profile Image" width="33" height="33" src="assets/img/profiles/6x.jpg"/>
            </div>
            <h5>Nathaniel Hamilton</h5>
            <span className="location semi-bold"><i class="icon-map"></i>Friday, 5.00 pm</span>
          </div>
          <div className="card-description">
            <p>Halo apa kabar tjui</p>
          </div>
        </div>
      </div>
    )
  }
}

export default EmailInbox

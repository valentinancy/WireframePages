import React from 'react';
import SocialHeader from './social/SocialHeader';
import SocialProfile from './social/SocialProfile';
import SocialInput from './social/SocialInput';
import SocialUpdate from './social/SocialUpdate';

class Social extends React.Component {
  render() {
    return (
      <div className="social">
        <div className="row">
          <SocialHeader />
        </div>
        <div className="row">
          <SocialProfile />
        </div>
        <div className="row">
          <div className="col-md-6">
            <SocialInput />
          </div>
          <div className="col-md-6">
            <SocialUpdate />
            <SocialUpdate />
            <SocialUpdate />
          </div>

        </div>
      </div>
    )
  }
}

export default Social

import React from 'react';

class SocialInput extends React.Component {
  render() {
    return(
      <div className="social-input">
      <div className="card col2 padding-20" data-social="item">
          <form className="simform no-margin" autocomplete="off" data-social="status">
            <div className="status-form-inner">
              <span>
                <label for="status-q1">What's on your mind?</label>
              </span>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SocialInput

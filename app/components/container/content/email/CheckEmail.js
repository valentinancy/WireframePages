import React from 'react';
import EmailInbox from './EmailInbox';
import NoEmail from './NoEmail';

class CheckEmail extends React.Component {
  render() {
    return(
      <div className="email">
        <div className="col-md-4">
          <EmailInbox username={this.props.params.username}/>
        </div>
        <div className="col-md-8">
          <NoEmail />
        </div>
      </div>
    )
  }
}

export default CheckEmail

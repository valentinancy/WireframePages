import React from 'react';
import EmailSidebar from './email/EmailSidebar';
import EmailInbox from './email/EmailInbox';
import NoEmail from './email/NoEmail';

class Email extends React.Component {
  render() {
    return(
      <div className="email">
        <div className="col-md-3">
          <EmailSidebar />
        </div>
        <div className="col-md-2">
          <EmailInbox username={this.props.params.username}/>
        </div>
        <div className="col-md-6">
          <NoEmail />
        </div>
      </div>
    )
  }
}

export default Email

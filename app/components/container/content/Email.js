import React from 'react';
import EmailSidebar from './email/EmailSidebar';
import CheckEmail from './email/CheckEmail';

class Email extends React.Component {
  render() {
    return(
      <div className="email">
        <div className="col-md-2">
          <EmailSidebar username={this.props.params.username}/>
        </div>
        <div className="col-md-10">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Email

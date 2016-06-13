import React from 'react';

class ComposeEmail extends React.Component {
  render() {
    return(
      <div className="compose-email">
        <div className="col-sm-12 no-padding">
          <div className="wysiwyg5-wrapper email-toolbar-wrapper">
          </div>
          <form>
            <div className="form-group-attached">
              <div className="row clearfix">
                <div className="col-sm-6">
                  <div className="form-group form-group-default">
                    <label>TO:</label>
                    <input name="to" data-role="tagsinput" className="form-control tagsinput" type="text"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group form-group-default">
                    <label>CC:</label>
                    <input type="text" className="form-control" name="cc" placeholder="Add Carbon Copy"/>
                  </div>
                </div>
              </div>
              <div className="form-group form-group-default">
                <label>Subject</label>
                <input type="text" className="form-control" name="subject"/>
              </div>
            </div>
          </form>
          <div className="wysiwyg5-wrapper email-body-wrapper">
            <textarea className="wysiwyg email-body"></textarea>
          </div>
        </div>
        <div className="row p-b-20">
          <div className="col-sm-1">
          </div>
          <div className="col-sm-9">
            <button className="btn btn-white btn-cons">Cancel</button>
            <button className="btn btn-complete btn-cons m-l-10">Send</button>
          </div>
          <div className="col-sm-1">
            <button className="btn btn-complete pull-right">
              <i className="pg-save"></i>
            </button>
          </div>
        </div>
      </div>

    )
  }
}

export default ComposeEmail

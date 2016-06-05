import React from 'react';

class SocialProfile extends React.Component {
  render() {
    return (
      <div className="social-profile">
      <div className="container-fluid p-t-30 p-b-30 ">
        <div className="row">
          <div className="col-md-4">
            <div className="container-xs-height">
              <div className="row-xs-height">
                <div className="social-user-profile col-xs-height text-center col-top">
                  <div className="thumbnail-wrapper d48 circular bordered b-white">
                    <img alt="Avatar" width="55" height="55" src="assets/img/profiles/avatar.jpg"/>
                  </div>
                  <br></br>
                  <i className="fa fa-check-circle text-success fs-16 m-t-10"></i>
                </div>
                <div className="col-xs-height p-l-20">
                  <h3 className="no-margin">David Nester</h3>
                  <p className="no-margin fs-16">is excited about the new pages design framework
                  </p>
                  <p className="hint-text m-t-5 small">San Fransisco Bay | CEO at Pages.inc
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <p className="no-margin fs-16">Hi My Name is David Nester, &amp; heres my new pages user profile page</p>
            <p className="hint-text m-t-5 small">I love reading people's about page especially those who are in the same industry as me.</p>
          </div>
          <div className="col-md-4">
            <p className="m-b-5 small">1,435 Mutual Friends</p>
            <ul className="list-unstyled ">
              <li className="m-r-10">
                <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                  <img width="35" height="35" src="assets/img/profiles/1.jpg"/>
                </div>
              </li>
              <li>
                <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                  <img width="35" height="35" src="assets/img/profiles/2.jpg"/>
                </div>
              </li>
              <li>
                <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                  <img width="35" height="35" src="assets/img/profiles/3.jpg"/>
                </div>
              </li>
              <li>
                <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                  <img width="35" height="35" src="assets/img/profiles/4.jpg"/>
                </div>
              </li>
              <li>
                <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                  <img width="35" height="35" src="assets/img/profiles/5.jpg"/>
                </div>
              </li>
              <li>
                <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                  <img width="35" height="35" src="assets/img/profiles/6.jpg"/>
                </div>
              </li>
              <li>
                <div className="thumbnail-wrapper d32 circular b-white m-r-5 b-a b-white">
                  <img width="35" height="35" src="assets/img/profiles/7.jpg"/>
                </div>
              </li>
              <li>
                <div className="thumbnail-wrapper d32 circular b-white">
                  <div className="bg-master text-center text-white"><span>+34</span>
                  </div>
                </div>
              </li>
            </ul>
            <br></br>
            <p className="m-t-5 small">More friends</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default SocialProfile

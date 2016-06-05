import React from 'react';

class MenuBar extends React.Component {
  render() {
    return (
      <div className="header-menubar">
         <ul className="notification-list no-margin hidden-sm hidden-xs b-grey b-l b-r no-style p-l-30 p-r-20">
             <li className="p-r-15 inline">
                <a  href="#" className="icon-set globe-fill">
                  <span className="bubble"></span>
                </a>
             </li>
             <li className="p-r-15 inline">
                <a href="#" className="icon-set clip "></a>
              </li>
              <li className="p-r-15 inline">
                <a href="#" className="icon-set grid-box"></a>
              </li>
         </ul>
      </div>
    )
  }
}

export default MenuBar

import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="header-searchbar">
        <a href="#" className="search-link"><i className="pg-search"></i>Type anywhere to <span className="bold">search</span></a>
      </div>
    )
  }
}

export default SearchBar

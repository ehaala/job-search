import React, { Component } from 'react';
import './index.css';


class Header extends Component {

  render() {
    return (
      
      <div>
          
       <form className="headForm">
       <input type="text" name="keyWord"  value="key word" />__
        <input type="text" name="location" value="location" />
       </form>
          
          </div>
    )
  }
}

export default Header;
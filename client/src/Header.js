import React, { Component } from 'react';
import './index.css';


class Header extends Component {

  render() {
    return (
      
      <div>
          
       <form>
       <input type="text" name="keyWord" value="key word" />
  
 
        <input type="text" name="location" value="location" />
       </form>
          
          </div>
    )
  }
}

export default Header;
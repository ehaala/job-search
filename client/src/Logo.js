import React, { Component } from 'react';
import './index.css';


class Logo extends Component {

  render() {
    return (
      
        <div className="card__image border-tlr-radius firstImg">
        <img src="https://static.pexels.com/photos/27406/pexels-photo-27406.jpg" alt="animal" className="border-tlr-radius" />
        <form className="formOverImg">
            <input type="text" onSubmit={(e) => this.handleFormInput(e)} />
            <button type="submit">Search!</button>
          </form>  
        </div>
    )
  }
}

export default Logo;
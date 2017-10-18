import React, { Component } from 'react';
import './App.css';
import './index.css';

class Items extends Component {
  constructor(props) {
    super(props)

    this.state = {
      favArray : [],
      title: props.item.title,
      company: props.item.company.name,
      location: props.item.company.location.name,
      url: props.item.apply_url,
      postDate: props.item.post_date
    }
    this.addToFavs = this.addToFavs.bind(this);
  }
  addToFavs(savedJob) {
    var fav = this.state.favArray;
    fav.push(savedJob);
    this.setState({taskArray: fav});
  }
  render() {
    return (
      <div className='App'>

        <div className=" belowImg">
            <div className="card radius shadowDepth1">
                <div className="card__content card__padding">
                <div className="card__meta">
                  <p>Location: {this.state.location}</p>
                    <time>Post Date: {this.state.postDate}</time>
                </div>
           
          <article className="card__article">
            <h2><a>Title: {this.state.title}</a></h2>
              <p>Apply <a href={this.state.url} target="_blank">here!</a></p>
          </article>
                </div>

          <div className="card__action">

            <div className="card__author">
            <img src="http://images6.fanpop.com/image/photos/36800000/Mr-T-mrt-36834265-320-254.png" height="40px" alt="user" />
            <div className="card__author-content">
              <h3>Company: {this.state.company}</h3>
             
               <a href="#">add to favorites</a>
              </div>
            </div>
          </div>
             </div>             
        </div>
      </div>
    );
  }

}

export default Items;
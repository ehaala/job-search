import React, { Component } from 'react';
import './App.css';


class Favorites extends Component {

  constructor(props) {
    super(props)
    this.state = {
      favorites: []
    }
  }

  componentDidMount() {
    fetch('/jobs')
      .then(response => response.json())
      .then(response => this.setState({favorites: response}))
  }

  render() {
    var mappedFavorites = this.state.favorites.map(function(item, index) {
        console.log({item});
    return ([
      <div key={index} className="App">

      <div className="wrapper">
        <div className="card radius shadowDepth1">
          <div className="card__image border-tlr-radius">
          				<img src="http://lorempixel.com/400/200/nightlife/" alt="nightlife" className="border-tlr-radius" />
                      </div>
          <div className="card__content card__padding">
            <div className="card__share">
                              <div className="card__social">
                                  <a className="share-icon facebook" ><span className="fa fa-facebook"></span></a>
                                  <a className="share-icon twitter" ><span className="fa fa-twitter"></span></a>
                                  <a className="share-icon googleplus" ><span className="fa fa-google-plus"></span></a>
                              </div>

                              <a id="share" className="share-toggle share-icon" ></a>
            </div>
      				<div className="card__meta">
      					<a>{item.company}</a>
                          <time>{item.location}</time>
      				</div>
      				<article className="card__article">
  	    				<h2><a>{item.title}</a></h2>
  	    				<p>LOCATION OF JOB<br/>for <strong>{item.meta.contactPerson}</strong></p>
  	    			</article>
      			</div>
      			<div className="card__action">

      				<div className="card__author">
      					<img src="http://lorempixel.com/40/40/sports/" alt="user" />
      					<div className="card__author-content">
      						By <a>John Doe</a>
      					</div>
      				</div>
      			</div>
          </div>

                              <p className="text-center">Created By <a href="https://twitter.com/mithicher">Mithicher Baro</a></p>
        </div>
      </div>
    ])
  })
  return (
    <div>
      <h1>My Jobs</h1>
      <div> {mappedFavorites} </div>
    </div>
    )
  }
}

export default Favorites;

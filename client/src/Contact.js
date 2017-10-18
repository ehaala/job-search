import React, { Component } from 'react';
import './App.css';


class Movie extends Component {
  render() {
    return (
      <div>
      <h1> Contact us</h1>

      <div className="wrapper">

          		<div className="card radius shadowDepth1">
          			<div className="card__image border-tlr-radius">
          				<img src="http://lorempixel.com/400/200/animals/" alt="animal" className="border-tlr-radius" />
                      </div>

          			<div className="card__content card__padding">

						<div className="card__meta">
							<a >Job Search</a>					
						</div>
						<article className="card__article">
							<h2><a>Have a problem...</a></h2>					
							<p>Contacts us by</p>
						</article>
					</div>

					<div className="card__action">

						<div className="card__author">
							<a className="share-icon facebook" ><span className="fa fa-facebook"></span></a>  
							<a href='https://twitter.com/shway250' className="share-icon twitter" ><span className="fa fa-twitter"></span></a>
							<a className="share-icon googleplus" ><span className="fa fa-google-plus"></span></a>


							<div className="card__author-content">
								
							</div>
						</div>
					</div>
				</div>

			</div>

      </div>
    )
  }
}

export default Movie;

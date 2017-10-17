import React, { Component } from 'react';
import './App.css';


class Main extends Component {
  render() {

    return (
      <div>
      <h1> This is the Main Blog</h1>
      	
		<div className="wrapper">
          	<div className="card radius shadowDepth1">
	    		<div className="card__content card__padding">
					<div className="card__meta">
						<a >Location could go here</a>
							<time>job posted date can go here</time>
					</div>

					<article className="card__article">
						<h2><a>Job title should go here</a></h2>

						<p>For more detials and application click here... sooo url link can go here</p>
					</article>
                </div>

					<div className="card__action">

						<div className="card__author">
							<img src="http://lorempixel.com/40/40/sports/" alt="user" />
							<div className="card__author-content">
								possible <a>add to favorites</a>
							</div>
						</div>
					</div>
             </div> 


			<div className="card radius shadowDepth1">
	    		<div className="card__content card__padding">
					<div className="card__meta">
						<a >Location could go here</a>
							<time>job posted date can go here</time>
					</div>

					<article className="card__article">
						<h2><a>Job title should go here</a></h2>

						<p>For more detials and application click here... sooo url link can go here</p>
					</article>
                </div>

					<div className="card__action">

						<div className="card__author">
							<img src="http://lorempixel.com/40/40/sports/" alt="user" />
							<div className="card__author-content">
								possible <a>add to favorites</a>
							</div>
						</div>
					</div>
             </div>	            
        </div>
      </div>
    )
  }
}

export default Main;

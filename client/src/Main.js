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
						<a >Web Design</a>
							<time>17th March</time>
					</div>

					<article className="card__article">
						<h2><a>Material Design Card - For Blog Post Article</a></h2>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
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
        </div>
		<div className="wrapper">
          	<div className="card radius shadowDepth1">
	    		<div className="card__content card__padding">
					<div className="card__meta">
						<a >Web Design</a>
							<time>17th March</time>
					</div>

					<article className="card__article">
						<h2><a>Material Design Card - For Blog Post Article</a></h2>

						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus harum...</p>
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
        </div>
      </div>
    )
  }
}

export default Main;

import React, { Component } from 'react';
import './App.css';


class Main extends Component {
  render() {

    return (
      <div>
      <h1> About us</h1>
      	
		<div className="wrapper">
          

			<div className="card radius shadowDepth1">
	    		<div className="card__content card__padding">
					<div className="card__meta">
						<a >Built in 8 hours</a>
							<time>...on 10/17/17</time>
					</div>

					<article className="card__article">
						<h2><a>Our story begins when..</a></h2>
							<p>A father, is overly cautious with his son.  Who has a foreshortened arm. When his son goes on a field trip but gets too close to a dangerous area to prove himself, he is abducted. Horrified his father must set out to find him. A women who has a really short memory -- joins the father and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, his son plots his escape from his captors.</p>
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

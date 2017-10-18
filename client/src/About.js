import React, { Component } from 'react';
import './App.css';


class Main extends Component {
  render() {

    return (
      <div>
      <h1> About us</h1>
      	
		<div className="wrapper">
          

			<div className="card radius shadowDepth1">
				<div className="card__image border-tlr-radius">
					<img src="http://images6.fanpop.com/image/photos/36800000/Mr-T-mrt-36834265-320-254.png" alt="animal" className="border-tlr-radius" />
				</div>
					<div className="card__content card__padding">
					<div className="card__meta">
						<a >Built in 8 hours</a>
							<time>...on 10/17/17</time>
					</div>

					<article className="card__article">
						<h2><a>Our story begins when..</a></h2>
							<p>A father, is overly cautious with his son.  Who has a foreshortened arm. When his son goes on a field trip but gets too close to a dangerous area to prove himself, he is abducted. Horrified his father must set out to find him. A women who has a really short memory -- joins the father and complicates the encounters with sharks, jellyfish, and a host of ocean dangers. Meanwhile, his son plots his escape from his captors. During this time the distrut father needed to find a job so he can afford to look for his son. This is the site he used to find that job...</p>
					</article>
                </div>

					<div className="card__action">

						<div className="card__author">
							<img src="http://images6.fanpop.com/image/photos/36800000/Mr-T-mrt-36834265-320-254.png" height="40px" alt="user" />
							
						</div>
					</div>
             </div>	            
        </div>
      </div>
    )
  }
}

export default Main;

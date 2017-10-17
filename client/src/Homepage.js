import React, { Component } from 'react';
import './index.css';


class Homepage extends Component {
  // constructor(props){
	// 	super(props)
	// 	this.state = {
	// 	  jobs: []
	
	// 	}
	// 	this.componentDidMount = this.componentDidMount.bind(this)
	//   }
	//   componentDidMount(){
	// 	fetch('/jobs')
	// 	  .then(response => response.json())
	// 	  .then(response => this.setState({jobs: response}))
		  
	//   }
  render() {
    return (
      <div>
      <h1 className="App"> This is the Homepage</h1>
      {/* <ul className="App">
       
        {this.state.jobs.map((item, index) => (<li key={index}>{item.title} </li>))}
        
      </ul> */}

      


      </div>
    )
  }
}

export default Homepage;

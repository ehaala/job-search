import React, { Component } from 'react';
import './index.css';
import Items from './Items';



class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      value: 'california'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let url = "https://authenticjobs.com/api/?api_key=cbfee583fa92882f7d2472043cebdcd4&format=json&method=aj.jobs.search&keywords=";
    let query = this.state.value;
    let display = "&perpage=5";
    let full = url + query + display;
    fetch(full)
      .then(response => response.json())
      .then(response => this.setState({
        items: response.listings.listing
      }))
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      value: e.target.value
    });
    let url = "https://authenticjobs.com/api/?api_key=cbfee583fa92882f7d2472043cebdcd4&format=json&method=aj.jobs.search&keywords=";
    let query = this.state.value;
    let display = "&perpage=5";
    let full = url + query + display;
    fetch(full)
      .then(response => response.json())
      .then(response => response.listings.listing.length && this.setState({
        items: response.listings.listing
      }))
  }

  render() {
    let listings = this.state.items.map((item, index) => (
      <Items item={item} key={index} />
      ))

    return (
      <div className='App'>
        <div className="color">
          <h1 >Job Search</h1>
           {/*Can't get form working*/}
           <input type="text" placeholder="California"/>
          <button>Search!</button>
        </div>
          {listings}
      </div>
    );
  }
}

export default Homepage;

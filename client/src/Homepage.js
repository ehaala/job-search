import React, { Component } from 'react';
import './index.css';



class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      company: "",
      location: "",
      url: "",
      postDate: "",
      value: "seattle"
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
        title: response.listings.listing[0].title,
        company: response.listings.listing[0].company.name,
        location: response.listings.listing[0].company.location.name,
        url: response.listings.listing[0].apply_url,
        postDate: response.listings.listing[0].post_date
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
        title: response.listings.listing[0].title,
        company: response.listings.listing[0].company.name,
        location: response.listings.listing[0].company.location.name,
        url: response.listings.listing[0].apply_url,
        postDate: response.listings.listing[0].post_date
      }))
  }

  render() {
    return (
      <div className="App">

        <div className="card__image border-tlr-radius firstImg">
        <img src="https://static.pexels.com/photos/27406/pexels-photo-27406.jpg" alt="animal" className="border-tlr-radius" />
         
        
            <form className="formOverImg" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Keywords"/>
            <button type="submit">Search!</button>
          </form>
          </div>

         

           
          <h1 className="belowImg">Job Title: {this.state.title}</h1>
          <h3>Company: {this.state.company}</h3>
          <p>Location: {this.state.location}</p>
          <p>Post Date: {this.state.postDate}</p>
          <p>Apply <a href={this.state.url} target="_blank">here!</a></p>
          <form>
            <button type="submit">Add to favorites</button>
          </form>
          <p>Search key: {this.state.value}</p>
      </div>
    );
  }
}

export default Homepage;
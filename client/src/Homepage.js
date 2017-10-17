import React, { Component } from 'react';
import './index.css';
import Logo from './Logo';


class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      company: "",
      location: "",
      url: "",
      value: "html"
    }
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
        url: response.listings.listing[0].apply_url
      }))
  }

  handleFormInput(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <ul className="App">
          <form >
            <input type="text" onSubmit={(e) => this.handleFormInput(e)} />
            <button type="submit">Search!</button>
          </form>
           <Logo />
          <h1>Job Title: {this.state.title}</h1>
          <h3>Company: {this.state.company}</h3>
          <p>Location: {this.state.location}</p>
          <p>Apply <a href={this.state.url} target="_blank">here!</a></p>
          <form>
            <button type="submit">Add to favorites</button>
          </form>
      </ul>
    );
  }
}

export default Homepage;
import React from 'react';
import { Component } from 'react/';
import Header from './Components/Header';
import Data from './Components/Data';


class Assignment extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    fetch("https://www.reddit.com/r/reactjs.json")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      this.setState({
        posts: res
      })
    });
  }
  render() {
    return (
      <div>
        <Header></Header>
        <ul><Data postData={this.state.posts}></Data></ul>
      </div>
    );
  }
}

export default Assignment;

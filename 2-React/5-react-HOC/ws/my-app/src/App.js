import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import CommentList from './components/CommentList'
import TopicList from './components/TopicList'

class App extends Component {

  handleTopicSelect(topic) {
    console.log(`${topic} has selected`);
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">demo-app</div>
        <CommentList />
        <TopicList onTopicSelect={(topic) => { this.handleTopicSelect(topic)}}/>
      </div>
    );
  }
}

export default App;

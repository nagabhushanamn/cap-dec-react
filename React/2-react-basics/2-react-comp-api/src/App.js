import React, { Component } from 'react';
import Message from './components/Message';
import PropTypes from 'proptypes';
import Layout from './components/Layout'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor()');
    this.state = {
      message: 'greetings'
    }
  }

  getChildContext() {
    return { color: 'red' };
  }

  changeMessage(message) {
    this.setState({
      message
    });
  }

  renderMessage() {
    let { message } = this.state;
    if (message) {
      return <Message message={this.state.message} />
    } else {
      return null;
    }
  }

  render() {
    console.log('App :: render()');
    return (
      <div className="container">
        <div className="page-header"> React Component API </div>
        <hr />
        <button onClick={this.changeMessage.bind(this, "Good Morning")} className="btn btn-primary"> GM </button>
        <button onClick={() => { this.changeMessage('Good Noon') }} className="btn btn-primary"> GN </button>
        <button onClick={() => { this.changeMessage('Good Evening') }} className="btn btn-primary"> GE </button>
        <button onClick={() => { this.changeMessage('') }} className="btn btn-primary"> Remove Message </button>
        <hr />
        {this.renderMessage()}
        <hr/>

        <Layout>
            <Message />
            <Message />
            <Message />
        </Layout>

      </div>
    );
  }
}

App.childContextTypes = {
  color: PropTypes.string
};

export default App;

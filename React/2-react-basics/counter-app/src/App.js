import React, { Component } from 'react';
import HitButton from './components/HitButton';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log('App :: constructor()');
  }
  render() {
    console.log('App :: render()');
    return (
      <div className="container">
        <div className="page-header">react counter-app</div>
        <HitButton label="Hit" />
      </div>
    );
  }

}

export default App;

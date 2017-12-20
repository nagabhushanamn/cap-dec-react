import React, { Component } from 'react';
import HitButton from './components/HitButton';
import TotalCountDisplay from './components/TotalCountDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log('App :: constructor()');
    this.state = {
      totalCount: 0
    };
  }

  incTotalCount(v) {
    this.setState({
      totalCount: this.state.totalCount + Number.parseInt(v)
    });
  }

  render() {
    console.log('App :: render()');
    return (
      <div className="container">
        <div className="page-header">react counter-app</div>
        <HitButton label="10" onHit={this.incTotalCount.bind(this)} />
        <hr />
        <HitButton label="100" onHit={this.incTotalCount.bind(this)} />
        <hr />
        <HitButton label="-100" onHit={this.incTotalCount.bind(this)} />
        <hr />
        <TotalCountDisplay totalCount={this.state.totalCount} />
      </div>
    );
  }

}

export default App;

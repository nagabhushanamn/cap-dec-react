import React, { Component } from 'react';

class TotalCountDisplay extends Component {
    constructor(props) {
        super(props);
        console.log('TotalCountDisplay :: constructor()');
    }
    render() {
        console.log('TotalCountDisplay :: render()');
        let { totalCount } = this.props;
        return (
            <div className="alert alert-info">
                Total Hit-Count :  <span className="badge">{totalCount}</span>
            </div>
        );
    }
}

export default TotalCountDisplay;
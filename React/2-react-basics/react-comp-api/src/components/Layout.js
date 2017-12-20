import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">All Items</div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
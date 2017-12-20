import React, { Component } from 'react';
import PropTypes from 'proptypes';

class ActionButton extends Component {
    render() {
        return (
            <button style={{ backgroundColor: this.context.color }}>{this.props.label}</button>
        );
    }
}


ActionButton.contextTypes = {
    color: PropTypes.string
};

export default ActionButton;
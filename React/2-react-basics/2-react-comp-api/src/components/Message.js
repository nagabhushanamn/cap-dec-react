import React, { Component } from 'react';
import PropTypes from 'proptypes';
import ActionButton from './ActionButton';

class Message extends Component {
    constructor(props) {
        super(props);
        console.log('Message :: constructor()');
        // this.state = {
        //     serverMessage: ''
        // }
    }
    componentWillMount() {
        console.log('Message :: componentWillMount()');
    }
    render() {
        console.log('Message :: render()');
        return (
            <div className="jumbotron">
                <p>{this.props.message} &mdash; <ActionButton label="delete"/></p> 
                <hr />
                <button onClick={() => { this.forceUpdate() }}><i className="glyphicon glyphicon-refresh"></i></button>
            </div>
        );
    }
    componentDidMount() {
        console.log('Message :: componentDidMount()');
        // this.setState({
        //     serverMessage: 'Hello from server'
        // });
    }

    componentWillReceiveProps(nextProps) {
        console.log('Message :: componentWillReceiveProps()');
        //console.dir(nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Message :: shouldComponentUpdate()');
        if (this.props.message === nextProps.message) return false;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Message :: componentWillUpdate()');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Message :: componentDidUpdate()');
    }

    componentWillUnmount() {
        console.log('Message :: componentWillUnmount()');
    }

}

Message.defaultProps = {
    message: 'Nil'
}
Message.propTypes = {
    message: PropTypes.string
}

Message.displayName = "Greet-Message";

export default Message;
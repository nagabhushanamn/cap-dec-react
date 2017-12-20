import React, { Component } from 'react';

class HitButton extends Component {
    constructor(props) {
        super(props);
        //console.log(props);
        console.log('HitButton :: constructor()');
        this.state = {
            count: 0
        };
    }

    handleBtnClick() {
        // console.dir(this);
        this.setState({
            count: this.state.count + 1
        });
        this.props.onHit()
    }

    render() {
        console.log('HitButton :: render()');
        let { label } = this.props;
        let { count } = this.state;
        return (
            <div>
                <button onClick={this.handleBtnClick.bind(this)} className="btn btn-primary">
                    {label} - {count}
                </button>
            </div>
        );
    }
}

export default HitButton;
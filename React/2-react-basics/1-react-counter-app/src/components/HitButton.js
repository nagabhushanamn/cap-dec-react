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
        let {label}=this.props;
        this.setState({
            count: this.state.count + Number.parseInt(label)
        });
        this.props.onHit(label)
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
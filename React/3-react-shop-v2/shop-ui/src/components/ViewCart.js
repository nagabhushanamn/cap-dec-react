import React, { Component } from 'react';

class ViewCart extends Component {
    renderCartItems() {
        let { items } = this.props;
        return items.map((item, idx) => {
            return (
                <tr key={idx}>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                </tr>
            );
        })
    }
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading"> Items in cart </div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <tbody>
                            {this.renderCartItems()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ViewCart;
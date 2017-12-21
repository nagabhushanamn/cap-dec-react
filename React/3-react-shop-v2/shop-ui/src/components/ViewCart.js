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
            <div>
                <table className="table table-bordered">
                    <tbody>
                        {this.renderCartItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewCart;
import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart'

import { connect } from 'react-redux';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewCart: false,
      cart: []
    };
  }
  

  addToCart(product) {
    this.setState({
      //cart: this.state.cart.concat(product)
      cart: [...this.state.cart, product]
    });
  }


  renderProducts() {
    let {products}=this.props;
    let { viewCart } = this.state;
    if (!viewCart) {
      return products.map((product, idx) => {
        return <Product onBuy={(product) => { this.addToCart(product) }} onNewReview={(id, review) => { this.handleNewReview(id, review) }} product={product} key={idx} index={idx} />
      })
    } else {
      return null;
    }
  }

  renderCart() {
    let { viewCart, cart } = this.state;
    if (viewCart) return <ViewCart items={cart} />
    else return null;
  }


  render() {
    let { cart } = this.state;
    return (
      <div>
        <div className="container">
          <div className="page-header"> shopIT </div>
          <span className="badge">{cart.length}</span> in cart &nbsp; | &nbsp; <a href="#/" onClick={() => { this.setState({ viewCart: !this.state.viewCart }) }}> {this.state.viewCart ? 'view prodocts' : 'view cart'}</a>
          <hr />
          <div className="list-group">
            {this.renderProducts()}
            {this.renderCart()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(App);

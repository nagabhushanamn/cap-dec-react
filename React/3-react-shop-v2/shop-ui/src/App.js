import React, { Component } from 'react';
import Product from './components/Product';
import ViewCart from './components/ViewCart'

// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewCart: false,
      cart: [],
      products: [
        {
          id: 1,
          name: 'Laptop',
          price: '198000',
          description: 'New mac pro',
          canBuy: true,
          imagePath: 'images/Laptop.png',
          reviews: [
            { stars: 5, author: 'nag@gmail.com', body: 'Good one' },
            { stars: 3, author: 'indu@gmail.com', body: 'costly one' }
          ]
        },
        {
          id: 2,
          name: 'Mobile',
          price: '18000',
          description: 'New  pro',
          canBuy: true,
          imagePath: 'images/Mobile.png',
          reviews: [
            { stars: 5, author: 'nag@gmail.com', body: 'Good one' },
            { stars: 3, author: 'indu@gmail.com', body: 'costly one' }
          ]
        }
      ]
    };
  }

  addToCart(product) {
    this.setState({
      //cart: this.state.cart.concat(product)
      cart: [...this.state.cart, product]
    });
  }

  handleNewReview(id, review) {
    let { products } = this.state;
    let newProducts = products.map(product => {
      if (id !== product.id) return product;
      else {
        product.reviews.push(review);
        return product;
      }
    });
    this.setState({
      products: newProducts
    });
  }

  renderProducts() {
    let { viewCart, products } = this.state;
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
          <span className="badge">{cart.length}</span> in cart &nbsp; | &nbsp; <a href="#" onClick={() => { this.setState({ viewCart: !this.state.viewCart }) }}> {this.state.viewCart?'view prodocts':'view cart'}</a>
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

export default App;

import React, { Component } from 'react';
import Product from './components/Product';

// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
    let { products } = this.state;
    return products.map((product, idx) => {
      return <Product onNewReview={(id, review) => { this.handleNewReview(id, review) }} product={product} key={idx} index={idx} />
    })
  }


  render() {
    console.log('App :: render()');
    return (
      <div>

        {
          /* 
          <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">shopIT</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><i className="glyphicon glyphicon-home"></i>Home</a></li>
            </ul>
          </div>
        </nav> 
        */
        }

        <div className="container">
          <div className="page-header"> shopIT </div>
          <div className="list-group">
            {this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

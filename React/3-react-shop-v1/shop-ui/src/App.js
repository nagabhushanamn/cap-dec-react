import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: 'Laptop',
          price: '198000',
          description: 'New mac pro',
          canBuy: true,
          imagePath: 'images/Laptop.png'
        },
        {
          name: 'Mobile',
          price: '18000',
          description: 'New  pro',
          canBuy: true,
          imagePath: 'images/Mobile.png'
        }
      ]
    };
  }

  renderBuyBtn(product) {
    if (product.canBuy)
      return <button className="btn btn-sm btn-primary">buy</button>
    else
      return null;
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-xs-4 col-sm-3 col-md-3">
              <img alt="product" src={product.imagePath} className="img-responsive" />
            </div>
            <div className="col-xs-8 col-sm-9 col-md-9">
              <span className="badge">{idx + 1}</span>
              <h4>{product.name}</h4>
              <h5>&#8377;{product.price}</h5>
              <p>{product.description}</p>
              {this.renderBuyBtn(product)}
            </div>
          </div>
        </div>
      );
    })
  }


  render() {
    return (
      <div>
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
        <div className="container">
          <div className="list-group">
            {this.renderProducts()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import classnames from 'classnames';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
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

  handleTabChange(tab) {
    this.setState({
      tab
    });
  }

  renderBuyBtn(product) {
    if (product.canBuy)
      return <button className="btn btn-sm btn-primary">buy</button>
    else
      return null;
  }
  renderTabPanel(product) {
    let { tab } = this.state;
    let panel;
    switch (tab) {
      case 1:
        panel = <div className="panel"><p>{product.description}</p></div>
        break;
      case 2:
        panel = <div className="panel"><p>Not Yet</p></div>
        break;
      case 3:
        panel = <div className="panel"><p>None yet</p></div>
        break;
      default:
        panel = null;

    }
    return panel;
  }

  renderProducts() {
    let { products, tab } = this.state;
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
              {this.renderBuyBtn(product)}
              <hr />
              <section>
                <ul className="nav nav-tabs">
                  <li className={tab === 1 ? 'active' : ''}><a onClick={() => { this.handleTabChange(1) }}>Description</a></li>
                  <li className={classnames({ active: tab === 2, other: true })}><a onClick={() => { this.handleTabChange(2) }}>Specification</a></li>
                  <li className={classnames({ active: tab === 3, other: false })}><a onClick={() => { this.handleTabChange(3) }}>Reviews</a></li>
                </ul>
                {this.renderTabPanel(product)}
              </section>
            </div>
          </div>
        </div>
      );
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

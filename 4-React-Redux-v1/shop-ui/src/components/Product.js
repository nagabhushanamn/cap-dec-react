import React, { Component } from 'react';
import classnames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';
import { store } from '../store';
import { loadReviewsAsync, submitNewReviewAsync } from '../actions'

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: []
        }
    }
    componentDidMount() {
        let { product } = this.props;
        store.subscribe(() => {
            let reviews = store.getState().reviews.filter(review => review.productId === product.id);
            this.setState({
                reviews
            });
        })
    }
    handleTabChange(tab) {
        let { product } = this.props;
        if (tab === 3) {
            store.dispatch(loadReviewsAsync(product.id));
        }
        this.setState({
            tab
        });
    }

    handleSubmitNewReview(review) {
        review.productId = this.props.product.id;
        store.dispatch(submitNewReviewAsync(review));
    }

    handleBuyBtn() {
        this.props.onBuy(this.props.product);
    }

    renderBuyBtn(product) {
        if (true)
            return <button onClick={() => { this.handleBuyBtn() }} className="btn btn-sm btn-primary">buy</button>
        else
            return null;
    }

    renderReviews(product) {
        return this.state.reviews.map((review, idx) => <Review key={idx} review={review} />);
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
                panel = (
                    <div className="panel">
                        {this.renderReviews(product)}
                        <ReviewForm onNewReview={(review) => this.handleSubmitNewReview(review)} />
                    </div>
                )
                break;
            default:
                panel = null;

        }
        return panel;
    }

    render() {
        let { tab } = this.state;
        let { product, index } = this.props;
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-xs-4 col-sm-3 col-md-3">
                        <img alt="product" src={product.imagePath} className="img-responsive" />
                    </div>
                    <div className="col-xs-8 col-sm-9 col-md-9">
                        <span className="badge">{index + 1}</span>
                        <h4>{product.name}</h4>
                        <h5>&#8377;{product.price}</h5>
                        {this.renderBuyBtn(product)}
                        <hr />
                        <section>
                            <ul className="nav nav-tabs">
                                <li className={tab === 1 ? 'active' : ''}><a href="#/" onClick={() => { this.handleTabChange(1) }}>Description</a></li>
                                <li className={classnames({ active: tab === 2, other: true })}><a href="#/" onClick={() => { this.handleTabChange(2) }}>Specification</a></li>
                                <li className={classnames({ active: tab === 3, other: false })}><a href="#/" onClick={() => { this.handleTabChange(3) }}>Reviews</a></li>
                            </ul>
                            {this.renderTabPanel(product)}
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
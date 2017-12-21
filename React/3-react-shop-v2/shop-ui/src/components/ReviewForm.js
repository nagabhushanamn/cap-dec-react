import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false
        }
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.starsField.value,
            author: this.refs.authorField.value,
            body: this.refs.bodyField.value
        }
        this.props.onNewReview(newReview);
        this.setState({ isFormOpen: false });
    }
    renderRviewForm() {
        let { isFormOpen } = this.state;
        if (!isFormOpen) {
            return <button onClick={() => { this.setState({ isFormOpen: true }) }} className="btn btn-default"> New Review </button>
        } else {
            return (
                <div className="col-xs-8 col-sm-8 col-md-6">
                    <div className="panel panel-default">
                        <div className="panel-heading">ReviewForm</div>
                        <div className="panel-body">
                            <form onSubmit={(e) => { this.handleFormSubmit(e) }}>
                                <div className="form-group">
                                    <label>stars</label>
                                    <select className="form-control" ref="starsField">
                                        {[1, 2, 3, 4, 5].map((n, i) => <option key={i}>{n}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>author</label>
                                    <input className="form-control" ref="authorField" />
                                </div>
                                <div className="form-group">
                                    <label>body</label>
                                    <textarea className="form-control" ref="bodyField"></textarea>
                                </div>
                                <button className="btn btn-primary">submit</button>
                                <button type="button" onClick={() => { this.setState({ isFormOpen: false }) }} className="btn btn-danger"> cancel </button>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (
            <div className="row">
                {this.renderRviewForm()}
            </div>
        );
    }
}

export default ReviewForm;

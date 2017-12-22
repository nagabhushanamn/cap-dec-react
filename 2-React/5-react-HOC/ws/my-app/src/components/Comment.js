import React, { Component,PropTypes } from 'react';

class Comment extends Component {
    render() {
        let { comment } = this.props;
        return (
            <div className="list-group-item">
                <div className="alert alert-info">
                     <span className="badge">{comment.author}</span><hr />
                     <p>{comment.message}</p>
                </div>    
            </div>
        );
    }
}

Comment.propTypes = {
    comment:PropTypes.object.isRequired
}

export default Comment;
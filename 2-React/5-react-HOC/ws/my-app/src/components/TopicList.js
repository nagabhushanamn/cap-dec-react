import React, { Component } from 'react';
import DataSource from '../ds/DataSource';

import { withSubscription } from '../hoc/index';

class TopicList extends Component {

     render() {
         let { onTopicSelect,data:topics} = this.props;
         let topicEles = topics.map((topic, idx) => <div onClick={() => { onTopicSelect(topic)}} key={idx} className="list-group-item">{topic}</div>);
        return (
            <div className="col-md-6 col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-heading">All Topics</div>
                    <div className="panel-body">
                        {topicEles}
                    </div>   
                </div>  
            </div>    
        );
    }
}

export default withSubscription(TopicList, (DataSource, props) => { return DataSource.getTopics()});
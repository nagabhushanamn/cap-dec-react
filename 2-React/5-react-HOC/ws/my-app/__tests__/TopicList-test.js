

import React from 'react';
import TopicList from '../src/components/TopicList';
import { shallow,mount } from 'enzyme';


describe('TopicList tests', function () { 

    test('TopicList rendered correctly', function () { 

        const handleSelectTopic = jest.fn();     
        

        const wrapper = mount(
            <TopicList onTopicSelect={handleSelectTopic}/>
        );

        // const titleDiv = wrapper.find('.panel-heading');
        // expect(titleDiv.text()).toBe('All Topics');



       const topicEle = wrapper.find('.list-group-item').first(); // topic ele
       topicEle.simulate('click');
       expect(handleSelectTopic).toBeCalledWith('React')    



    });

});
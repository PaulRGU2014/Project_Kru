import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return <div className= "ui container comments">
        <ApprovalCard>
        <CommentDetail 
        // these are components
        author="Sam"
        timeAgo="Today at 4:45PM" 
        content="Nice blog post!"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail
        author="Alex" 
        timeAgo="Today at 2:00AM" 
        content="Looking cool!"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>
        
        <ApprovalCard>
        <CommentDetail 
        author="Jane" 
        timeAgo="Today at 5:00PM" 
        content="Awesome!!!!!!"
        avatar={faker.image.avatar()}
        />
        </ApprovalCard>
        {/* we don't need to use {} */}
    </div>
};


ReactDOM.render(<App />, document.querySelector('#root'))
// This is a component which is actually a template that'll connect to index.js
import React from 'react';

const CommentDetail = props => {
return (
<div className= "comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.timeAgo}</span>
                </div>
                <div className="text">{props.content}</div>
            </div>
        </div>
);
};

// We need an export statement to be used on other files

export default CommentDetail;
import React from 'react'

import './style.css';

import Avatar from '../Avatar';


const Comment = ({ user: { author: { name, avatar }, content } }) => (
  <div className="wrapper-comment">
    <Avatar className="avatar-comment" url={ avatar } name={ name } />
    <p className="comment"><span className="avatar-title" >{ name }</span> { content }</p>
  </div>
);


export default Comment;

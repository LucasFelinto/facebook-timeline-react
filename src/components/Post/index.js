import React from 'react';

import Avatar from '../Avatar';

import './style.css';

import Comment from '../Comment';

const Post = ({ user:{ author: { name, avatar }, content, date }, comments }) => (
  <div className="wrapper-post">
    <div className="wrapper-user">
      <Avatar className="avatar-post" url={ avatar } name={ name } />
      <h1 className="name" >{ name }</h1>
      <span className="date" >{ date }</span>
    </div>
    <p className="content" >{ content }</p>
    { comments.map( comment => <Comment key={ comment.id } user={ comment } />) }
  </div>
);

export default Post;

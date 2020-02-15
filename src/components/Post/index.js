import React from 'react';

import Avatar from '../Avatar';

import './style.css';

const Post = ({ user:{ author: { name, avatar }, content, date } }) => (
  <div className="wrapper-post">
    <div className="wrapper-user">
      <Avatar className="avatar-post" name={ name } />
      <h1 className="name" >{ name }</h1>
      <span className="date" >{ date }</span>
    </div>
    <p className="content" >{ content }</p>
  </div>
);

export default Post;

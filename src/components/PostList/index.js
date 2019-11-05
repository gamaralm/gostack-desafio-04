import React, { Component } from 'react';

import Post from '../Post';

import './style.css';

class PostList extends Component {
  render() {
    return (
      <div className="content">
        <Post />
        <Post />
      </div>);
  }
}

export default PostList;

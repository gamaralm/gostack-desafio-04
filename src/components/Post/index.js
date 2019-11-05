import React from 'react';

import Comment from '../Comment';

import avatarJulio from '../../assets/users/julio.svg';
import './style.css';

function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img src={avatarJulio} alt="" />
        <div>
          <span>Júlio Alcantara</span>
          <span>04 Jun 2019</span>
        </div>
      </div>

      <p>Pessoal, alguém sabe se a Rocketseat está contratando?</p>

      <div className="comments">
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default Post;

import React from 'react';

import avatarJulio from '../../assets/users/julio.svg';
import './style.css';

function Comment() {
  return (
    <div className="comment">
      <img src={avatarJulio} alt="" />

      <div>
        <strong>Diego Fernandes</strong> A Rocketseat está sempre em busca de
        novos membros para o time, e geralmente ficamos de olho em quem se
        destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por
        alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando
        vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem
        mesmo, esse comentário é real).
      </div>
    </div>
  );
}

export default Comment;

import React from 'react';

import Post from '../Post';

import './style.css';

const post = [
  {
    id: 1,
    author: {
      name: "Julio Alcantara",
      avatar: "http://url-da-imagem.com/imagem.jpg"
    },
    date: "04 Jun 2019",
    content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
    comments: [
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        content: "Conteúdo do comentário"
      }
    ]
  },
]


const TimeLine = () => (
  <main className="main">
    <Post user={ post[0] } />
  </main>
);

export default TimeLine;

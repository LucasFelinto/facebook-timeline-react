import React from 'react';

import Post from '../Post';

import './style.css';

const posts = [
  {
    id: 1,
    author: {
      name: "Julio Alcantara",
      avatar: "https://i.ibb.co/zN8sGfP/Rectangle-4-2x.png"
    },
    date: "04 Jun 2019",
    content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
    comments: [
      {
        id: 1,
        author: {
          name: "Diego Fernandes",
          avatar: "https://i.ibb.co/Q6n9TZS/diego.png"
        },
        content: "Diego Fernandes A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
      }
    ]
  },
  {
    id: 1,
    author: {
      name: "Gabriel Lisboa",
      avatar: "https://i.ibb.co/KWDXTMP/Rectangle-4-2x.png"
    },
    date: "04 Jun 2019",
    content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.",
    comments: [
      {
        id: 1,
        author: {
          name: "Clara Lisboa",
          avatar: "https://i.ibb.co/178pppT/Rectangle-4-2x.png"
        },
        content: "Clara Lisboa Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
      },
      {
        id: 1,
        author: {
          name: "Cézar Toledo",
          avatar: "https://i.ibb.co/Drf05kZ/Rectangle-4-2x.png"
        },
        content: "Cézar Toledo Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
      }
    ]
  },
];


const TimeLine = () => (
  <main className="main">
    {posts.map( post => {
      return <Post user={ post } key={ post.id } comments={ post.comments } />
    })}

  </main>
);

export default TimeLine;

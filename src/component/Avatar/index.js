import React from 'react';

import './style.css';

const Avatar = ({ url, name }) => (
  <img className="avatar" src={ url } alt={ name } />
)

Avatar.defaultProps = {
  url: 'https://encurtador.com.br/abjzE',
  name: 'Meu perfil'
}

export default Avatar;

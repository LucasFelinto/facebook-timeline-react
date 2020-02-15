import React from 'react';

import './style.css';

import Avatar from '../Avatar'

import logo from '../../assets/logo.png';

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <nav className="nav">
          <a href="https://www.facebook.com" >
            <img className="logo" src={ logo } alt=""/>
          </a>
          <div className="wrapper">
            <a className="btn-profile" href="https://www.facebook.com">Meu perfil</a>
            <Avatar/>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;

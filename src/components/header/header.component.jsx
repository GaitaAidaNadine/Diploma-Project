import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-mic3.png'
import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link to='/' >
      <img src={logo} alt="logo" style={{width:'130px', height:'100px', marginLeft:'80px'}}/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
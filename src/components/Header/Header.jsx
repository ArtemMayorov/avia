import React from 'react'
import './Header.scss'
import logoImage from './Header-Image/av-logo.svg';
const Header = () => {
  return (
    <div className='header'>
        <img className='header__image' src={logoImage} alt="logo" />
    </div>
  )
}
export default Header;


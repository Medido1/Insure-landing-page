import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';
import introImg from '../assets/images/image-intro-mobile.jpg'
import { useState } from 'react';
import MobileMenu from './MobileMenu';

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  function showMenu() {
    setIsShowMenu(!isShowMenu);
  }
  return (
    <header>
      <div className='flex justify-between items-center p-4'>
      <img src={logo} alt='insure logo' className='w-20 h-6'/>
      <button onClick={showMenu} >
        <img src={isShowMenu ? closeIcon : hamburgerIcon} alt="toggle menu" />
      </button>
      {isShowMenu && 
      <MobileMenu />
    }
      </div>
      <img src={introImg} alt="family members holding hands" />
  </header>
  )
  
}

export default Header;
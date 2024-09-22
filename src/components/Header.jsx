import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);

  function showMenu() {
    setIsShowMenu(!isShowMenu);
  }
  return (
    <header className="flex justify-between px-6 py-8">
    <img src={logo} alt='insure logo' className='w-20 h-6'/>
    <button onClick={showMenu} >
      <img src={isShowMenu ? closeIcon : hamburgerIcon} alt="toggle menu" />
    </button>
    {isShowMenu && 
      <MobileMenu />
    }
  </header>
  )
  
}

export default Header;
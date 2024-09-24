import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';
import introImgMobile from '../assets/images/image-intro-mobile.jpg';
import introImgDesktop from '../assets/images/image-intro-desktop.jpg';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import HeaderIntro from './HeaderIntro';

function Header({isMobile}) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  function showMenu() {
    setIsShowMenu(!isShowMenu);
  }
  return (
    <header>
      <div 
        className='flex justify-between items-center p-4
          sm:px-8 sm:items-start sm:mb-2
        '>
        <img src={logo} alt='insure logo' className='w-20 h-6'/>
        {isMobile && 
          <button onClick={showMenu} >
            <img src={isShowMenu ? closeIcon : hamburgerIcon} alt="toggle menu" />
          </button>
        }
        {isShowMenu &&
        <MobileMenu isMobile={isMobile}/>
       }
       {!isMobile && 
        <MobileMenu isMobile={isMobile}/>
       }
      </div>
      {!isShowMenu &&
        <div className='sm:bg-DarkViolet sm:h-1/2
          sm:flex sm:flex-col sm:items-center
        '>
          <img src={isMobile ? introImgMobile : introImgDesktop} alt="family members holding hands" 
            className='sm:mt-10
              lg:absolute lg:right-20 lg:h-3/4'
          />
          <HeaderIntro />
        </div>
      }
  </header>
  )
  
}

export default Header;
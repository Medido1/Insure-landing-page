import logo from '../assets/images/logo.svg';  
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';

function FooterTop(){
  return (
    <div className='flex flex-col items-center
      lg:flex-row lg:justify-between lg:w-full lg:px-40
    '>
      <img src={logo} alt="insure logo" />
      <div className='flex gap-2 mt-8 pb-8 lg:gap-4'>
        <img src={facebookIcon} alt="facebook icon" className='icon'/>
        <img src={twitterIcon} alt="twitter icon" className='icon'/>
        <img src={pinterestIcon} alt="pineterest icon" className='icon'/>
        <img src={instagramIcon} alt="instagram icon" className='icon'/>
      </div>
    </div>
  )
}

export default FooterTop;
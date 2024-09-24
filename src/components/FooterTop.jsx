import logo from '../assets/images/logo.svg';  
import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';

function FooterTop(){
  return (
    <div className='flex flex-col items-center'>
      <img src={logo} alt="insure log" />
      <div className='flex gap-2 mt-8 pb-8'>
        <img src={facebookIcon} alt="facebook icon" />
        <img src={twitterIcon} alt="twitter icon" />
        <img src={pinterestIcon} alt="pineterest icon" />
        <img src={instagramIcon} alt="instagram icon" />
      </div>
    </div>
  )
}

export default FooterTop;
import FooterTop from "./FooterTop";
import { footerNav } from "../../data";
import FooterLinks from "./FooterLinks";
import { useState } from "react";

function Footer(){
  const [footerNavData, setFooterNavData] = useState(footerNav);
  return (
    <footer 
      className="flex flex-col items-center mt-20 bg-VeryLightGray pt-20 pb-10
        bg-mobileFooter bg-no-repeat
        lg:bg-desktopFooter lg:bg-top-right
      ">
      <FooterTop />
      <div className="border border-grey-500 w-4/5"></div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-x-10
        lg:flex lg:justify-start lg:w-full lg:px-40 lg:gap-32
      ">
        {footerNavData.map((nav) => {
          return <FooterLinks key={nav.id} data={nav}/>
        })}
      </div>
    </footer>
  )
}

export default Footer;
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
      ">
      <FooterTop />
      <div className="border border-grey-500 w-4/5"></div>
      <div>
        {footerNavData.map((nav) => {
          return <FooterLinks key={nav.id} data={nav}/>
        })}
      </div>
    </footer>
  )
}

export default Footer;
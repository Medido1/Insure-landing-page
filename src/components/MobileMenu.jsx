
function MobileMenu() {
  return (
    <div 
      className="w-screen h-screen  pt-10 absolute top-20 left-0 flex flex-col items-center text-center
        bg-VeryDarkViolet
      ">
      <ul className="text-white text-lg font-bold flex flex-col gap-8">
        <li>HOW WE WORK</li>
        <li>BLOG</li>
        <li>ACCOUNT</li>
        <li>VIEW PLANS</li>
      </ul>
      <div className={
        `bg-navMenu bg-contain bg-no-repeat bg-bottom 
        absolute bottom-0 w-screen h-1/2`
      }>
      </div>
    </div>
  )
}

export default MobileMenu;
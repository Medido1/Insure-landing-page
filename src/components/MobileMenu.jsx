
function MobileMenu() {
  return (
    <div 
      className="w-screen h-screen pt-10 absolute top-16 left-0 
      flex flex-col items-center text-center
      bg-VeryDarkViolet z-10
      sm:w-1/2 sm:h-2 sm:pt-0 sm:static sm:bg-transparent
      ">
      <ul 
        className="text-white text-lg font-bold flex flex-col gap-8
        sm:text-gray-500 sm:text-sm sm:flex-row sm:items-center
        ">
        <li className="cursor-pointer hover:text-black">HOW WE WORK</li>
        <li className="cursor-pointer hover:text-black">BLOG</li>
        <li className="cursor-pointer hover:text-black">ACCOUNT</li>
        <li className="border border-black px-4 py-2
          hover:bg-black hover:text-white cursor-pointer
        ">
          VIEW PLANS
          </li>
      </ul>
      <div className={
        `bg-navMenu bg-contain bg-no-repeat bg-bottom 
        absolute bottom-0 w-screen h-1/2
        sm:hidden`
      }>
      </div>
    </div>
  )
}

export default MobileMenu;
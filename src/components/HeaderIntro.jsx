import '../index.css';

function HeaderIntro({isMobile}) {
  return (
    <div 
    className="py-40 px-5 text-center bg-DarkViolet font-DMSerif
      bg-mobileIntro 
      lg:text-left  lg:self-start lg:px-20
    ">
      {!isMobile && 
        <div className='border w-1/6 border border-gray-500 opacity-80 mb-10'></div>
      }
      <h1 className="text-5xl text-white mb-2 lg:w-1/3">
        Humanizing your insurance
      </h1>
      <p className="text-VeryLightGray text-sm font-thin leading-6 lg:w-1/3">
        Get your life insurance coverage easier and faster. We blend our expertise 
        and technology to help you find the plan that’s right for you. Ensure you 
        and your loved ones are protected.
      </p>
      <button 
      className="border-2 border-white px-6 py-2 
      border-white text-VeryLightGray text-xs mt-4 tracking-widest
      hover:bg-white hover:text-DarkViolet
      ">
        VIEW PLANS
      </button>
    </div>
  )
}

export default HeaderIntro;
import '../index.css';

function HeaderIntro() {
  return (
    <div 
    className="py-20 px-5 text-center bg-DarkViolet font-DMSerif
      bg-mobileIntro
    ">
      <h1 className="text-5xl text-white mb-2">
        Humanizing your insurance
      </h1>
      <p className="text-VeryLightGray text-sm font-thin leading-6">
        Get your life insurance coverage easier and faster. We blend our expertise 
        and technology to help you find the plan that’s right for you. Ensure you 
        and your loved ones are protected.
      </p>
      <button 
      className="border-2 border-white px-6 py-2 
      border-white text-VeryLightGray text-xs mt-4 tracking-widest">
        VIEW PLANS
      </button>
    </div>
  )
}

export default HeaderIntro;
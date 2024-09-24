function HowWeWork() {
  return (
    <div 
      className="py-20 px-5 text-center bg-DarkViolet mt-40
      bg-workMobile bg-no-repeat bg-right-top
      sm:w-3/4 lg:w-3/2 
      lg:flex lg:items-center lg:justify-between lg:text-left lg:px-10 lg:h-16
      lg:self-center
    ">
      <p className="text-white text-4xl font-DMSerif mb-5 lg:w-1/2">
        Find out more about how we work
      </p>
      <button
        className="border-2 border-white px-6 py-2 
        border-white text-VeryLightGray text-xs mt-4 tracking-widest
        hover:bg-white hover:text-DarkViolet"
      >
        how we work
      </button>
    </div>
  )
}

export default HowWeWork;
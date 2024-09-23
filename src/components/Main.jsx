import Benefit from "./Benfit";
import HowWeWork from "./HowWeWork";
import {benefitsList} from "../../data";
import { useState } from "react";

function Main() {
  const [benefitData, setBenefitData] = useState(benefitsList);

  return (
    <main 
      className="py-8 px-4 flex flex-col items-center font-Karla
      bg-workMobile bg-no-repeat workMobile
    ">
      <div className="border-2 border-gray w-1/2 mt-16"></div>
      <h2 className="text-4xl mt-4 font-bold mb-14">We're different</h2>
      <div className="flex flex-col gap-4 items-center text-center">
        {benefitData.map((benefit) => {
          return <Benefit key={benefit.id} data={benefit}/>
        })}
      </div>
      <HowWeWork />
    </main>
  )
}

export default Main;
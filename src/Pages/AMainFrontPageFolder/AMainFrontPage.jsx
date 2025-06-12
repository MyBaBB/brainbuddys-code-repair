import "./AMainFrontPage.jsx"
import React from "react";
import BlankBrain from "./BlankBrain.jpg";
const AMainFrontPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-fit m-auto
        bg-gray-900 text-white">
      <div className=" border-2 border-red-500 relative flex flex-col items-center justify-center
          h-full w-full   bg-gray-800 rounded-lg shadow-lg">
 <div className="relative flex flex-col items-center justify-center -mb-14 z-50 w-[70%] h-10 ">

<p className="text-center font-Orbitron-Regular font-bold">Brain-Buddy&apos;s</p>

 </div>
      <img src={BlankBrain} alt="Blank Brain Cover Image" className="relative"/>  
    
      </div>
    </div>
  )
}

export default AMainFrontPage
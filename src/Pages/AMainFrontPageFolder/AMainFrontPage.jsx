import "./AMainFrontPage.jsx"
import React from "react";
import BlankBrain from "./BlankBrain.jpg";
const AMainFrontPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-fit m-auto
                  bg-gray-900 text-white">
                 <div className="  relative flex flex-col items-center justify-center
                                     h-full w-full bg-gray-800 rounded-lg shadow-lg">
                      
                         
                            
                          
                           <img src={BlankBrain} alt="Blank Brain Cover Image" className="relative"/>
                          
                       
              </div>
    </div>
  )
}

export default AMainFrontPage  
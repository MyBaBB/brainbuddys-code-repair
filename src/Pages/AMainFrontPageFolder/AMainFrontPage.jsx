import "./AMainFrontPage.jsx"
import "./AMainFrontPage.css";
import React from "react";
import BlankBrain from "/BrainBuddy580x580.png";
const AMainFrontPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-full w-fit m-auto
                  text-white z-1">
                      <div className="relative ">
                        <div className="brainBuddysTitleBox absolute w-full h-fit p-2 bottom-[5.1rem] 
                      z-10 ">
                          <h1 className="BrainBuddysH1 relative flex m-auto w-fit text-[2rem] z-10 
                                        font-Itim-Regular text-white p-3
                           rounded-xl  bg-[#1479ea]">
                          Brain Buddy&apos;s
                          </h1>  
                        </div>
                            <img src={BlankBrain} alt="Blank Brain Cover Image" className="relative  "/>
                             
                       </div>
    </div>
  )
}

export default AMainFrontPage  
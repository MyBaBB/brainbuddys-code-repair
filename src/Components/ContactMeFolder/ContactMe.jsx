// eslint-disable-next-line no-unused-varstonsAllWrapper
import React, { useState } from "react";
import "./ContactMe.css";
 

const ContactMe = () => {
  return (
    <div
      className="ContactButtonHide relative z-50 m-auto mb-[.5rem] flex h-full
                    w-full items-center justify-center  
                     "
    >
      <div
        id="contact"
        className="contactButton_3dPage  m-auto mb-4 w-fit 
         cursor-pointer    duration-500 ease-in-out hover:scale-[100.8%] "
      >
        <a href="https://mybabb.com" >
          <button
            className=" w-fit   whitespace-nowrap text-xl    "
            style={{ textShadow: "1px 1px 2px black" }}
            title="Contact Me"
          >
            <span className="text-2xl font-bold text-[#FF8200]">&lt;</span>
            <span className="font-PTSerif-Bold  tracking-widest text-[whitesmoke]">
              &nbsp;&nbsp;MyBabb.com
            </span>
            <span className="text-2xl font-bold text-[#FF8200]">
              &nbsp;&nbsp;&gt;&nbsp;
            </span>
          </button>
          <hr className="m-auto h-[3px] w-28 rounded-lg border-[.2px] border-[#FF8200]/40 bg-transparent" />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;

import "./AMainFrontPage.jsx"
import "./AMainFrontPage.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import BlankBrain from "/BrainBuddy100px.png"; // Adjust the path as needed
 

const BrainBuddys = () => {
  return (
    <div className="brainBuddysBackground">
  <div className="brainBuddysOverlay"></div>
    <div className="relative flex items-center justify-center h-screen w-full   "> 
     <a href="https://mybabb.com/TechSupportPage"
      className="absolute top-4 left-4 z-10 
                 w-[100px] h-[100px]
                 hover:opacity-85">
    <img src={BlankBrain} alt="Brain Buddy Image Icon" />
    </a>


     <a href="https://mybabb.com/TechSupportPage" target="_blank" rel="noopener noreferrer"
      className="hover:opacity-85">
    <section className="relative flex-col items-center justify-center h-fit w-fit m-auto   z-1
                    ">
      <article className=" ">
        <header className="brainBuddysTitleBox relative flex flex-col items-center w-full h-fit p-2 bottom-[-3rem] sm:bottom-[.9rem] z-10">

            <h1
              className="BrainBuddysH1 text-center  text-[.6rem] sm:text-4xl z-10 
                       rounded-xl p-2  bg-[#33626e] px-4 bg-opacity-90 
                          font-PTSerif-Bold "
            >
            <span className="whitespace-nowrap text-amber-100">Brain&nbsp;Buddy&apos;s</span>
           
          </h1>
          <br />
          <span className="relative text-amber-100 text-center text-[.4rem] sm:text-2xl">Brett&apos;s Web Development and Technical Support</span>
        </header>
       
        <p className="visually-hidden">
          Brain Buddy`s is your trusted technical support hub, providing expert assistance in web development, troubleshooting, and optimization. Whether you`re stuck on coding challenges, software configuration, or website deployment, we`re here to help. Easily schedule a consultation through our integrated calendar or reach out via email for personalized guidance. From frontend design to backend systems, SEO strategies to accessibility improvements, we ensure you have the resources to overcome obstacles and enhance your digital projects. Get reliable support when you need it — because building the web should be stress-free and efficient

        </p>
      </article>
    </section>
 </a>
    </div>
    </div>
  );
};

export default BrainBuddys; 
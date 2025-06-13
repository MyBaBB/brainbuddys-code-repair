import "./AMainFrontPage.jsx"
import "./AMainFrontPage.css";
import React from "react";
import BlankBrain from "/BrainBuddy580x580.png"; // Adjust the path as needed

const BrainBuddys = () => {
  return (
    <section className="relative flex items-center justify-center h-full w-fit m-auto z-1">
      <article className="relative">
        <header className="brainBuddysTitleBox absolute w-full h-fit p-2 bottom-[2.1rem] z-10">
          <a href="https://mybabb.com/TechSupportPage" target="_blank" rel="noopener noreferrer">
          <h1
            className="BrainBuddysH1 relative flex m-auto w-fit text-[2rem] z-10 
                       font-PTSerif-Bold text-white p-3 rounded-xl bg-[#1479ea]"
          >
            Brain Buddy&apos;s
          </h1>
          </a>
        </header>
        <img src={BlankBrain} alt="Blank Brain Cover Image" className="relative m-auto" />

        {/* Hidden SEO content */}
        <p className="visually-hidden">
          Brain Buddy`s is your trusted technical support hub, providing expert assistance in web development, troubleshooting, and optimization. Whether you`re stuck on coding challenges, software configuration, or website deployment, we`re here to help. Easily schedule a consultation through our integrated calendar or reach out via email for personalized guidance. From frontend design to backend systems, SEO strategies to accessibility improvements, we ensure you have the resources to overcome obstacles and enhance your digital projects. Get reliable support when you need it — because building the web should be stress-free and efficient

        </p>
      </article>
    </section>
  );
};

export default BrainBuddys; 
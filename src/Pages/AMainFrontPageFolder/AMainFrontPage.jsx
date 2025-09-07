import "./AMainFrontPage.jsx";
import "./AMainFrontPage.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import BlankBrain from "/BrainBuddy580x580.webp"; // Adjust the path as needed
import LazyDisplayComponent from "./FrontPageComponents/DisplayComponentFolder/LazyDisplayComponent.jsx";

const BrainBuddys = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <a
        href="https://mybabb.com/TechSupportPage"
        target="_blank"
        rel="noopener noreferrer"
      >
        <section className="z-1 relative m-auto h-fit w-fit flex-col items-center justify-center">
          <article className="relative">
            <header className="brainBuddysTitleBox absolute bottom-[3.9rem] z-10 h-fit w-full p-2">
              <h1 className="BrainBuddysH1 relative z-10 m-auto flex w-fit rounded-xl bg-blue-500 p-2 text-center font-PTSerif-Bold text-[1rem] sm:text-4xl">
                <span>Brain &nbsp;</span>
                <span>Buddy&apos;s</span>
              </h1>
            </header>
            {/* <img src={BlankBrain} alt="Blank Brain Cover Image" className="relative m-auto" /> */}
            <LazyDisplayComponent />
            {/* Hidden SEO content */}
            <p className="visually-hidden">
              Brain Buddy`s is your trusted technical support hub, providing
              expert assistance in web development, troubleshooting, and
              optimization. Whether you`re stuck on coding challenges, software
              configuration, or website deployment, we`re here to help. Easily
              schedule a consultation through our integrated calendar or reach
              out via email for personalized guidance. From frontend design to
              backend systems, SEO strategies to accessibility improvements, we
              ensure you have the resources to overcome obstacles and enhance
              your digital projects. Get reliable support when you need it —
              because building the web should be stress-free and efficient
            </p>
          </article>
        </section>
      </a>
    </div>
  );
};

export default BrainBuddys;

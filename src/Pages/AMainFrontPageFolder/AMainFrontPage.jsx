import "./AMainFrontPage.css";
import BlankBrain from "/BrainBuddy100px.png"; // Adjust path as needed
import Me from "../../Images/Me.webp";
import Blair from "../../Images/Blair.webp";
import Bruce from "../../Images/Bruce.webp";
import Amber from "../../Images/Amber.webp";
import ContactMe from "../../Components/ContactMeFolder/ContactMe.jsx";
import { RoleCardOverlay } from "../../Components/TeamRoleCardsFolder/TeamRoleCards.jsx";

const BrainBuddys = () => {
  return (
    <div className="grid w-full grid-cols-1 min-[900px]:grid-cols-[1fr_minmax(auto,900px)_1fr]">
      {/* LEFT SIDEBAR */}
      <aside className="hidden border-r border-gray-200/20 bg-slate-50/10 p-4 min-[900px]:block"></aside>

      {/* MAIN CONTENT */}
      <main className="relative flex w-full flex-col items-center px-4 pb-20">
        {/* Logo */}
        <a
          href="https://mybabb.com/techsupportpage"
          className="absolute left-4 top-4 z-20 h-[100px] w-[100px] hover:opacity-85"
        >
          <img
            src={BlankBrain}
            alt="Brain Buddy Image Icon"
            className="brainBuddyIcon h-full w-full object-contain"
          />
        </a>

        {/* Hero Title */}
        <section className="relative z-10 mx-auto mt-24 flex w-full max-w-xl flex-col items-center justify-center sm:mt-10">
          <article className="flex w-full flex-col items-center">
            <header className="brainBuddysTitleBox relative z-10 flex h-fit w-full flex-col items-center p-2">
              <h1 className="BrainBuddysH1 z-10 rounded-xl bg-[#33626e] bg-opacity-90 p-2 px-4 text-center font-PTSerif-Bold text-xl sm:text-4xl">
                <span className="whitespace-nowrap text-amber-100">
                  Brain&nbsp;Buddy&apos;s
                </span>
              </h1>
              <br />
              <span className="relative mt-4 text-center text-xs text-amber-100 sm:text-2xl">
                Brett&apos;s Web Development and Technical Support
              </span>
            </header>

            <p className="visually-hidden">
              Brain Buddy`s is your trusted technical support hub, providing
              expert assistance in web development, troubleshooting, and
              optimization.
            </p>
          </article>
        </section>

        {/* 4 REPRESENTATIVE IMAGES WITH BADGES */}
        <section className="z-10 mt-12 w-full max-w-[600px] min-[900px]:max-w-full">
          <div className="grid grid-cols-1 justify-items-center gap-8 min-[900px]:grid-cols-2">
            {/* Representative 1 - Available */}
            <a href="https://mybabb.com/techsupportpage">
              <div className="imageCardContainer">
                <span className="statusBadge badgeAvailable">
                  <span className="green-dot"></span>
                  Available
                </span>
                <img
                  src={Me}
                  alt="Representative 1"
                  className="representativeImage"
                />
                <RoleCardOverlay roleIndex={0} />
              </div>
          </a>

            {/* Representative 2 - Unavailable */}
          <a href="https://mybabb.com/techsupportpage">
            <div className="imageCardContainer">
              <div className="statusBadge badgeUnavailable">
                <span className="amber-dot"></span>
                &nbsp;Active
              </div>
              <img
                src={Amber}
                alt="Representative 2"
                className="representativeImage"
              />
              <RoleCardOverlay roleIndex={1} />
            </div>
       </a>

            {/* Representative 3 - Unavailable */}
       <a href="https://mybabb.com/techsupportpage">
            <div className="imageCardContainer">
              <div className="statusBadge badgeUnavailable">
                <span className="amber-dot"></span>
                &nbsp;Active
              </div>
              <img
                src={Blair}
                alt="Representative 3"
                className="representativeImage"
              />
              <RoleCardOverlay roleIndex={2} />
            </div>
       </a>

            {/* Representative 4 - Unavailable */}
        <a href="https://mybabb.com/techsupportpage">
            <div className="imageCardContainer">
              <div className="statusBadge badgeUnavailable">
                <span className="red-dot"></span>
                &nbsp;Off-line
              </div>
              <img
                src={Bruce}
                alt="Representative 4"
                className="representativeImage"
              />
              <RoleCardOverlay roleIndex={3} />
            </div>
          </a>

      </div>
          
        </section>
        <div className="mt-12 flex w-full justify-center">
          <ContactMe />
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden border-l border-gray-200/20 bg-slate-50/10 p-4 min-[900px]:block"></aside>
    </div>
  );
};

export default BrainBuddys;

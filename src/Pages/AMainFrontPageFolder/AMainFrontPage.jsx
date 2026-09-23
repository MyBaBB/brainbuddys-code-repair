import "./AMainFrontPage.css";
import BlankBrain from "/BrainBuddy100px.png";
import MeArizona from "../../Images/MeArizona600x600.webp";
import FunkyBird from "../../Images/FunkyBird-900x600-2.webp";
import BruceNerd from "../../Images/BruceNerd-600x600-2.webp";
import Amber3 from "../../Images/Interface-crossEyedGirl.webp";
import ContactMe from "../../Components/ContactMeFolder/ContactMe.jsx";
import { RoleCardOverlay } from "../../Components/TeamRoleCardsFolder/TeamRoleCards.jsx";

const BrainBuddys = () => {
  return (
    <div className="grid w-full grid-cols-1 min-[900px]:grid-cols-[1fr_minmax(auto,900px)_1fr]">
      {/* LEFT SIDEBAR - Marked decorative if empty */}
      <aside className="hidden border-r border-gray-200/20 bg-slate-50/10 p-4 min-[900px]:block" aria-hidden="true"></aside>

      {/* MAIN CONTENT */}
      <main className="relative flex w-full flex-col items-center px-4 pb-20">
        {/* Logo Link */}
        <a
          href="https://mybabb.com/techsupportpage"
          className="absolute left-4 top-4 z-20 h-[100px] w-[100px] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 hover:opacity-85"
          aria-label="Brain Buddy Tech Support Home Page"
        >
          <img
            src={BlankBrain}
            alt=""
            aria-hidden="true"
            width="100"
            height="100"
            loading="eager"
            decoding="async"
            className="brainBuddyIcon h-full w-full object-contain"
          />
        </a>

        {/* Hero Title Section */}
        <section className="relative z-10 mx-auto mt-24 flex w-full max-w-xl flex-col items-center justify-center sm:mt-10" aria-labelledby="hero-heading">
          <article className="flex w-full flex-col items-center">
            <header className="brainBuddysTitleBox relative z-10 flex h-fit w-full flex-col items-center p-2 text-center">
              <h1 id="hero-heading" className="BrainBuddysH1 z-10 rounded-xl bg-[#33626e] bg-opacity-90 p-2 px-4 font-PTSerif-Bold text-xl sm:text-4xl">
                <span className="whitespace-nowrap text-amber-100">
                  Brain&nbsp;Buddy&apos;s
                </span>
              </h1>
              <p className="mt-4 text-xs text-amber-100 sm:text-2xl font-medium">
                Brett&apos;s Web Development and Technical Support
              </p>
            </header>

            {/* Screen reader summary tied semantically */}
            <p className="sr-only">
              Brain Buddy&apos;s is your trusted technical support hub, providing
              expert assistance in web development, troubleshooting, and
              optimization.
            </p>
          </article>
        </section>

        {/* Team Members Grid */}
        <section className="z-10 mt-12 w-full max-w-[600px] min-[900px]:max-w-full" aria-label="Support Team Members">
          <div className="grid grid-cols-1 justify-items-center gap-8 min-[900px]:grid-cols-2">
            
            {/* Representative 1 - High Priority (Above the Fold) */}
            <a 
              href="https://mybabb.com/techsupportpage" 
              className="group rounded-xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              aria-label="Connect with Brett - Web Development Representative (Status: Available)"
            >
              <div className="imageCardContainer relative">
                <div className="statusBadge badgeAvailable">
                  <span className="green-dot" aria-hidden="true"></span>
                  <span className="sr-only">Status:&nbsp;</span>Available
                </div>
                <img
                  src={MeArizona}
                  alt="Brett - Lead Web Developer"
                  width="600"
                  height="600"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  className="representativeImage"
                />
                <RoleCardOverlay roleIndex={0} />
              </div>
            </a>

            {/* Representative 2 - Lazy Loaded */}
            <a 
              href="https://mybabb.com/techsupportpage" 
              className="group rounded-xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              aria-label="Connect with Blair - Support Specialist (Status: Active)"
            >
  <div className="imageCardContainer relative">
                <div className="statusBadge badgeUnavailable">
                  <span className="amber-dot" aria-hidden="true"></span>
                  <span className="sr-only">Status:&nbsp;</span>Active
                </div>
                <img
                  src={Amber3}
                  alt="Amber - Systems Consultant"
                  width="600"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="representativeImage"
                />
                <RoleCardOverlay roleIndex={1} />
              </div>

            </a>

            {/* Representative 3 - Lazy Loaded */}
            <a 
              href="https://mybabb.com/techsupportpage" 
              className="group rounded-xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              aria-label="Connect with Amber - Technical Consultant (Status: Active)"
            >
             
              <div className="imageCardContainer relative">
                <div className="statusBadge badgeUnavailable">
                  <span className="amber-dot" aria-hidden="true"></span>
                  <span className="sr-only">Status:&nbsp;</span>Active
                </div>
                <img
                  src={FunkyBird}
                  alt="Blair - Technical Support Specialist"
                  width="600"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="representativeImage"
                />
                <RoleCardOverlay roleIndex={2} />
              </div>            
            </a>

            {/* Representative 4 - Lazy Loaded */}
            <a 
              href="https://mybabb.com/techsupportpage" 
              className="group rounded-xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
              aria-label="Connect with Bruce - Support Engineer (Status: Busy)"
            >
              <div className="imageCardContainer relative">
                <div className="statusBadge badgeUnavailable">
                  <span className="amber-dot" aria-hidden="true"></span>
                  <span className="sr-only">Status:&nbsp;</span>Active
                </div>
                <img
                  src={BruceNerd}
                  alt="Bruce - Infrastructure Specialist"
                  width="600"
                  height="600"
                  loading="lazy"
                  decoding="async"
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

      {/* RIGHT SIDEBAR - Marked decorative if empty */}
      <aside className="hidden border-l border-gray-200/20 bg-slate-50/10 p-4 min-[900px]:block" aria-hidden="true"></aside>
    </div>
  );
};

export default BrainBuddys;
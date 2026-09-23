import { useState, useEffect } from "react";
import "./AMainFrontPage.css";
import BlankBrain from "/BrainBuddy100px.png";
import MeArizona from "../../Images/MeArizona600x600.webp";
import FunkyBird from "../../Images/FunkyBird-900x600-2.webp";
import BruceNerd from "../../Images/BruceNerd-600x600-2.webp";
import Amber3 from "../../Images/Interface-crossEyedGirl.webp";
import ContactMe from "../../Components/ContactMeFolder/ContactMe.jsx";
import { RoleCardOverlay } from "../../Components/TeamRoleCardsFolder/TeamRoleCards.jsx";

const TEAM_MEMBERS = [
  { id: "brett", name: "Brett", roleIndex: 0, image: MeArizona, priority: "high", alt: "Brett - Lead Web Developer" },
  { id: "amber", name: "Amber", roleIndex: 1, image: Amber3, priority: "lazy", alt: "Amber - Systems Consultant" },
  { id: "blair", name: "Blair", roleIndex: 2, image: FunkyBird, priority: "lazy", alt: "Blair - Technical Support Specialist" },
  { id: "bruce", name: "Bruce", roleIndex: 3, image: BruceNerd, priority: "lazy", alt: "Bruce - Infrastructure Specialist" },
];

// Helper to randomly pick 1 or 2 available slots on initial render
const generateInitialStatuses = (totalMembers) => {
  const availableCount = Math.random() < 0.5 ? 1 : 2;
  const availableIndices = new Set();
  
  while (availableIndices.size < availableCount) {
    const randomIndex = Math.floor(Math.random() * totalMembers);
    availableIndices.add(randomIndex);
  }

  return Array.from({ length: totalMembers }, (_, index) => ({
    isAvailable: availableIndices.has(index),
  }));
};

const BrainBuddys = () => {
  const [memberStatuses, setMemberStatuses] = useState(() =>
    generateInitialStatuses(TEAM_MEMBERS.length)
  );

  useEffect(() => {
    // Timer fires exactly 10 seconds (10,000 ms) after initial load
    const timer = setTimeout(() => {
      setMemberStatuses((prevStatuses) => {
        const nextStatuses = prevStatuses.map((status) => ({ ...status }));
        const currentGreenCount = nextStatuses.filter((s) => s.isAvailable).length;

        // Pick a random member index to attempt to toggle
        const targetIndex = Math.floor(Math.random() * nextStatuses.length);
        const isTargetAvailable = nextStatuses[targetIndex].isAvailable;

        if (isTargetAvailable) {
          // Switching Green -> Amber is always safe (reduces count)
          nextStatuses[targetIndex].isAvailable = false;
        } else {
          // Attempting Amber -> Green
          if (currentGreenCount < 2) {
            // Safe to turn green since current green count is less than 2
            nextStatuses[targetIndex].isAvailable = true;
          } else {
            // Already at 2 greens: turn target green, but turn one existing green amber to maintain max 2 greens
            const greenIndices = nextStatuses
              .map((s, i) => (s.isAvailable ? i : null))
              .filter((i) => i !== null);

            // Randomly pick one of the existing green badges to switch to amber
            const indexToSwap = greenIndices[Math.floor(Math.random() * greenIndices.length)];

            nextStatuses[targetIndex].isAvailable = true;
            nextStatuses[indexToSwap].isAvailable = false;
          }
        }

        return nextStatuses;
      });
    }, 10000);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid w-full grid-cols-1 min-[900px]:grid-cols-[1fr_minmax(auto,900px)_1fr]">
      {/* LEFT SIDEBAR */}
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
              <p className="mt-4 text-xs font-medium text-amber-100 sm:text-2xl">
                Brett&apos;s Web Development and Technical Support
              </p>
            </header>

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
            {TEAM_MEMBERS.map((member, index) => {
              const isAvailable = memberStatuses[index]?.isAvailable;
              const statusText = isAvailable ? "AVAILABLE" : "ON-A-CALL";

              return (
                <a
                  key={member.id}
                  href="https://mybabb.com/techsupportpage"
                  className="group rounded-xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
                  aria-label={`Connect with ${member.name} (Status: ${statusText})`}
                >
                  <div className="imageCardContainer relative">
                    {/* Status Badge with soft fade transition */}
                    <div className={`statusBadge ${isAvailable ? "badgeAvailable" : "badgeUnavailable"}`}>
                      <span className={isAvailable ? "green-dot" : "amber-dot"} aria-hidden="true"></span>
                      <span className="sr-only">Status:&nbsp;</span>
                      {statusText}
                    </div>

                    <img
                      src={member.image}
                      alt={member.alt}
                      width="600"
                      height="600"
                      fetchPriority={member.priority === "high" ? "high" : "auto"}
                      loading={member.priority === "high" ? "eager" : "lazy"}
                      decoding="async"
                      className="representativeImage"
                    />
                    <RoleCardOverlay roleIndex={member.roleIndex} />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <div className="mt-12 flex w-full justify-center">
          <ContactMe />
        </div>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden border-l border-gray-200/20 bg-slate-50/10 p-4 min-[900px]:block" aria-hidden="true"></aside>
    </div>
  );
};

export default BrainBuddys;
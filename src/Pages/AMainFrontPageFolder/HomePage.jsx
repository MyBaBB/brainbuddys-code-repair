import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Catwoman from "../../Components/HackerBuddyFolder/HackerBuddy2.jsx";
import MeArizona from "../../Images/MeArizona600x600.webp";
import TurquoiseCross from "../../Images/TurquoiseCross-600x600.webp";
import BruceNerd from "../../Images/BruceNerd-600x600-2.webp";
import Amber3 from "../../Images/Interface-crossEyedGirl.webp";
import ContactMe from "../../Components/ContactMeFolder/ContactMe.jsx";
import { RoleCardOverlay } from "../../Components/TeamRoleCardsFolder/TeamRoleCards.jsx";

const TEAM_MEMBERS = [
  {
    id: "brett",
    name: "Brett",
    roleIndex: 0,
    image: MeArizona,
    priority: "high",
    alt: "Brett - Founder & Lead Web Developer at BrainBuddys",
    path: "/brett",
  },
  {
    id: "blair",
    name: "Blair",
    roleIndex: 2,
    image: TurquoiseCross,
    priority: "lazy",
    alt: "Blair - Technical Support Specialist at BrainBuddys",
    path: "/blair",
  },
  {
    id: "amber",
    name: "Amber",
    roleIndex: 1,
    image: Amber3,
    priority: "lazy",
    alt: "Amber - Systems & Solutions Consultant at BrainBuddys",
    path: "/amber",
  },
  {
    id: "bruce",
    name: "Bruce",
    roleIndex: 3,
    image: BruceNerd,
    priority: "lazy",
    alt: "Bruce - Infrastructure & DevOps Specialist at BrainBuddys",
    path: "/bruce",
  },
];

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

  // Dynamic SEO Document Metadata & Canonical Tag Setup
  useEffect(() => {
    document.title = "BrainBuddys | Brain Buddy's Tech Support & Code Repair";

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://brainbuddys.com/");
  }, []);

  // Live status switching interval
  useEffect(() => {
    const timer = setTimeout(() => {
      setMemberStatuses((prevStatuses) => {
        const nextStatuses = prevStatuses.map((status) => ({ ...status }));
        const currentGreenCount = nextStatuses.filter((s) => s.isAvailable).length;

        const targetIndex = Math.floor(Math.random() * nextStatuses.length);
        const isTargetAvailable = nextStatuses[targetIndex].isAvailable;

        if (isTargetAvailable) {
          nextStatuses[targetIndex].isAvailable = false;
        } else {
          if (currentGreenCount < 2) {
            nextStatuses[targetIndex].isAvailable = true;
          } else {
            const greenIndices = nextStatuses
              .map((s, i) => (s.isAvailable ? i : null))
              .filter((i) => i !== null);

            const indexToSwap = greenIndices[Math.floor(Math.random() * greenIndices.length)];

            nextStatuses[targetIndex].isAvailable = true;
            nextStatuses[indexToSwap].isAvailable = false;
          }
        }

        return nextStatuses;
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid w-full grid-cols-1 min-[900px]:grid-cols-[1fr_minmax(auto,900px)_1fr]">
      {/* LEFT SIDEBAR */}
      <aside className="hidden border-r border-gray-200/20 bg-slate-50/10 p-4 min-[900px]:block" aria-hidden="true"></aside>

      {/* MAIN CONTENT */}
      <main className="relative flex w-full flex-col items-center px-4 pb-20">
        {/* Hero Title Section */}
        <section className="relative z-10 mx-auto mt-24 flex w-full max-w-xl flex-col items-center justify-center sm:mt-[2.25rem]" aria-labelledby="hero-heading">
          <article className="flex w-full flex-col items-center">
            <header className="brainBuddysTitleBox relative z-10 flex w-full max-w-2xl flex-col items-center overflow-hidden rounded-2xl border border-teal-500/30 bg-slate-900/85 p-6 text-center shadow-[0_0_30px_rgba(45,212,191,0.15)] backdrop-blur-md transition-all duration-300 hover:border-teal-400/50 hover:shadow-[0_0_40px_rgba(45,212,191,0.25)] sm:p-8">
  
  {/* Primary Entity H1 */}
  <h1 id="hero-heading" className="relative z-10 my-1 font-PTSerif-Bold text-3xl font-extrabold tracking-tight text-slate-100 sm:text-5xl">
    <span className="bg-gradient-to-r from-amber-100 via-teal-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
      BrainBuddys
    </span>
  </h1>

  {/* Primary Descriptor Subheading H2 */}
  <h2 className="mt-3 max-w-xl text-sm font-semibold tracking-wide text-amber-100/90 sm:text-xl sm:leading-relaxed">
    Brain Buddy&apos;s Technical Support &amp; Web Development
  </h2>

  {/* DIYer Hero Pitch */}
  <p className="mt-2 text-xs font-medium text-slate-300 sm:text-base">
    Building it yourself and hit a wall? We step in to debug, fine-tune, and custom-code when AI tools &amp; builders fall short.
  </p>

  {/* Custom Tech Capabilities & WordPress Add-On Bar */}
  <div className="mt-5 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-teal-300/90 sm:text-xs">
    <span className="rounded-md border border-teal-500/20 bg-teal-950/50 px-2.5 py-1">
      React &amp; Web Debugging
    </span>
    <span className="rounded-md border border-amber-500/20 bg-amber-950/40 px-2.5 py-1 text-amber-200/90">
      WordPress Speed &amp; Performance
    </span>
    <span className="rounded-md border border-cyan-500/20 bg-cyan-950/50 px-2.5 py-1 text-cyan-200">
      Custom High-Converting Landing Pages
    </span>
  </div>

</header>

            {/* Entity Mapping Screen-Reader Paragraph for Search Bots & Accessibility */}
            <p className="sr-only text-xs">
              Welcome to BrainBuddys (frequently searched as Brain Buddy, Brain Buddies, or Brain Buddy&apos;s). 
              Led by Founder &amp; Lead Web Developer Brett, we specialize in React code repair, custom web application design, 
              and full-stack technical support.
            </p>
          </article>
        </section>

        {/* Team Members Grid */}
        <section className="z-10 mt-4 w-full max-w-[600px] min-[900px]:max-w-full" aria-label="Support Team Members">
          <div className="grid grid-cols-1 justify-items-center gap-8 min-[900px]:grid-cols-2">
            {TEAM_MEMBERS.map((member, index) => {
              const isAvailable = memberStatuses[index]?.isAvailable;
              const statusText = isAvailable ? "AVAILABLE" : "ON-A-CALL";

              return (
                <Link
                  key={member.id}
                  to={member.path}
                  className="group rounded-xl transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
                  aria-label={`Connect with ${member.name} (${member.alt}) - Current Status: ${statusText}`}
                >
                  <div className="imageCardContainer relative">
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
                </Link>
              );
            })}
          </div>
        </section>

        <div className="mt-12 flex w-full justify-center">
          <ContactMe />
        </div>

        <a
          className="absolute left-50 -translate-x-50 bottom-[3.5rem] z-20 h-[100px] w-[100px] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
          aria-label="BrainBuddys Home Page"
        >
          <Catwoman />
        </a>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden border-l border-gray-200/20 bg-slate-50/10 p-4 min-[900px]:block" aria-hidden="true"></aside>
    </div>
  );
};

export default BrainBuddys;
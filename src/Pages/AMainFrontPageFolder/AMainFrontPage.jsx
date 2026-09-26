import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AMainFrontPage.css";
import BlankBrain from "/BrainBuddy100px.png";
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
    alt: "Brett - Founder & Lead Web Developer at BrainBuddy Tech Support",
    path: "/brett",
  },
  {
    id: "blair",
    name: "Blair",
    roleIndex: 2,
    image: TurquoiseCross,
    priority: "lazy",
    alt: "Blair - Technical Support Specialist at BrainBuddy Tech Support",
    path: "/blair",
  },
  {
    id: "amber",
    name: "Amber",
    roleIndex: 1,
    image: Amber3,
    priority: "lazy",
    alt: "Amber - Systems & Solutions Consultant at BrainBuddy Tech Support",
    path: "/amber",
  },
  {
    id: "bruce",
    name: "Bruce",
    roleIndex: 3,
    image: BruceNerd,
    priority: "lazy",
    alt: "Bruce - Infrastructure & DevOps Specialist at BrainBuddy Tech Support",
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
    document.title = "BrainBuddy's Tech Support | Web Development & Technical Solutions";

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", "https://brainbuddys.com/amainfrontpage");
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
        {/* Top Home Logo Link */}
        <Link
          to="/amainfrontpage"
          className="absolute left-4 top-4 z-20 h-[100px] w-[100px] rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
          aria-label="Brain Buddy Tech Support Home Page"
        >
          <img
            src={BlankBrain}
            alt="BrainBuddy Tech Support Logo"
            width="100"
            height="100"
            loading="eager"
            decoding="async"
            className="brainBuddyIcon h-full w-full object-contain"
          />
        </Link>

        {/* Hero Title Section */}
        <section className="relative z-10 mx-auto mt-24 flex w-full max-w-xl flex-col items-center justify-center sm:mt-[2.25rem]" aria-labelledby="hero-heading">
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

            <p className="sr-only text-xs">
              Brain Buddy&apos;s (BrainBuddies) is your full-service technical support and web development hub. 
              Led by Founder &amp; Lead Web Developer Brett, we specialize in React code repair, custom web app design, 
              and full-stack technical solutions.
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
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden border-l border-gray-200/20 bg-slate-50/10 p-4 min-[900px]:block" aria-hidden="true"></aside>
    </div>
  );
};

export default BrainBuddys;
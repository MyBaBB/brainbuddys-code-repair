import { useState } from "react";
import "./TeamRoleCards.css";

export const teamRoles = [
  {
    id: 1,
    title: "Brett",
    title2: "Chief Web Architect",
    bullets: [
      "Oversees full system architecture and project direction",
      "Designs scalable structures for React, Vite, Tailwind, and backend integrations",
      "Ensures best practices, performance, and long‑term maintainability",
      "Guides developers and sets coding standards",
      "Approves final builds and technical decisions",
      "Translates client needs into technical solutions",
    ],
  },
  {
    id: 2,
    title: "Amber",
    title2: "Interface Designer",
    bullets: [
      "Creates clean, intuitive UI layouts and user flows",
      "Designs wireframes, mockups, and interactive prototypes",
      "Ensures visual consistency across all pages and components",
      "Collaborates with developers for accurate implementation",
      "Optimizes interfaces for mobile, tablet, and desktop",
      "Focuses on usability, clarity, and modern design aesthetics",
    ],
  },
  {
    id: 3,
    title: "Blair",
    title2: "Digital Media Artist",
    bullets: [
      "Designs custom graphics, icons, and visual assets",
      "Produces video content, motion graphics, and animations",
      "Enhances brand identity through visual storytelling",
      "Edits and optimizes media for web performance",
      "Collaborates with UI/UX to match the site’s aesthetic",
      "Creates promotional visuals, thumbnails, and short‑form videos",
    ],
  },
  {
    id: 4,
    title: "Bruce",
    title2: "SEO & Domain Strategist",
    bullets: [
      "Manages domains, DNS, SSL, and hosting‑related SEO factors",
      "Optimizes site structure for search visibility and ranking",
      "Performs keyword research and metadata optimization",
      "Ensures fast load times and proper indexing",
      "Monitors analytics and adjusts SEO strategy",
      "Handles redirects, sitemaps, and search‑engine compliance",
    ],
  },
];

export const RoleCardOverlay = ({ roleIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const role = teamRoles[roleIndex];

  if (!role) return null;

  return (
    <div className={`roleCardOverlayContainer ${isOpen ? "is-open" : ""}`}>
      {/* Title Bar - Shows title when closed, title2 when open */}
      <div className="roleTitleBar">
        <h3 className="roleTitle">
          <span className="titleClosed">{role.title}</span>
          <span className="titleOpen">{role.title2 || role.title}</span>
        </h3>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className="roleToggleButton"
          aria-expanded={isOpen}
          aria-label={`Toggle description for ${role.title}`}
        >
          {isOpen ? "Close" : "Details ▾"}
        </button>
      </div>

      {/* Accordion Content with Landing Bounce */}
      <div
        className="roleAccordionBounce"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className="accordionHeader">
          <span className="accordionTitle">{role.title2 || role.title}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="accordionCloseBtn"
          >
            ✕
          </button>
        </div>
        <ul className="roleBulletList">
          {role.bullets.map((bullet, idx) => (
            <li key={idx}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const TeamRoleCards = () => {
  return (
    <div className="teamRolesGrid">
      {teamRoles.map((role, index) => (
        <div key={role.id} className="teamRoleCardItem">
          <RoleCardOverlay roleIndex={index} />
        </div>
      ))}
    </div>
  );
};

export default TeamRoleCards;
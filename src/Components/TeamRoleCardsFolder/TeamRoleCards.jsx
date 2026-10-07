import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaInfoSolid } from "react-icons/lia";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import "./TeamRoleCards.css";

export const teamRoles = [
  {
    id: 1,
    title: "Brett",
    title2: "Chief Web Architect",
    path: "/brett",
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
    title2: "Head of Experience Design",
    path: "/amber",
    bullets: [
      "Creates clean, intuitive UI layouts and user flows",
      "Designs wire-frames, mockups, and interactive prototypes",
      "Ensures visual consistency across all pages and components",
      "Collaborates with developers for accurate implementation",
      "Optimizes interfaces for mobile, tablet, and desktop",
      "Focuses on usability, clarity, and modern design aesthetics",
    ],
  },
  {
   id: 3,
  title: "Blair",
  title2: "The Visual Boss",
  path: "/blair",
  bullets: [
    "Oversees all visual direction, brand identity, and media production",
    "Designs custom graphics, motion assets, and high-impact visuals",
    "Produces video content, promo reels, and digital storytelling",
    "Enhances aesthetic flow across web, social, and product platforms",
    "Collaborates with UI/UX to ensure seamless brand consistency",
    "Maintains high-definition creative standards across all media builds",
    ],
  },
  {
    id: 4,
    title: "Bruce",
    title2: "Lead - SEO & Domain Strategist",
    path: "/bruce",
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
  const navigate = useNavigate();
  const role = teamRoles[roleIndex];

  if (!role) return null;

  // Blocks toggle / close events from propagating
  const stopAnchorNavigation = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleToggle = (e) => {
    stopAnchorNavigation(e);
    setIsOpen((prev) => !prev);
  };

  // Navigates to the team member's page when clicking the open modal/accordion
  const handleCardClick = (e) => {
    e.stopPropagation();
    if (role.path) {
      navigate(role.path);
    }
  };

  return (
    <div className={`roleCardOverlayContainer ${isOpen ? "is-open" : ""}`}>
      {/* Top-Left Headphone Icon Badge */}
      <div className="cardTopLeftBadge">
        <TfiHeadphoneAlt size={22} />
      </div>

      {/* Bottom-Right Info Icon Badge */}
      <div className="cardInfoIconBadge">
        <LiaInfoSolid size={26} />
      </div>

      {/* Title Bar */}
      <div 
        className="roleTitleBar"
        onClick={isOpen ? handleCardClick : undefined}
        style={{ cursor: isOpen ? "pointer" : "default" }}
      >
        <h3 className="roleTitle">
          <span className="titleClosed">{role.title}</span>
          <span className="titleOpen">{role.title2 || role.title}</span>
        </h3>
        <button
          type="button"
          onClick={handleToggle}
          onMouseDown={stopAnchorNavigation}
          className="roleToggleButton z-50"
          aria-expanded={isOpen}
          aria-label={`Toggle description for ${role.title}`}
        >
          {isOpen ? "Close" : "Details ▾"}
        </button>
      </div>

      {/* Accordion Content Box - Clickable when open */}
      <div
        className="roleAccordionBounce cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="accordionHeader">
          <span className="accordionTitle">{role.title2 || role.title}</span>
          <button
            type="button"
            onClick={(e) => {
              stopAnchorNavigation(e);
              setIsOpen(false);
            }}
            onMouseDown={stopAnchorNavigation}
            className="accordionCloseBtn"
            aria-label="Close details"
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
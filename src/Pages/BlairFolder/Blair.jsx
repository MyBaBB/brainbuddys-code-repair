import React from "react";
import { Link } from "react-router-dom";
import FunkyBird from "../../Images/FunkyBird-900x600-2.webp";
import BlankBrain from "/BrainBuddy100px.png";

const Blair = () => {
  const skills = [
    "Digital Illustration",
    "Video Creation & Editing",
    "Social Media Graphics",
    "Content Creation",
    "Motion Graphics & Animation",
    "Brand Identity & Visuals",
    "Character & Asset Design",
    "Creative Direction",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center px-4 py-8 relative">
      {/* Background Glow Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full"></div>

      {/* Header / Navigation */}
      <header className="w-full max-w-4xl flex items-center justify-between mb-12 z-10">
        <Link
          to="/amainfrontpage"
          className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 transition-all text-amber-200 text-sm font-semibold shadow-lg group"
        >
          <span className="text-lg transition-transform group-hover:-translate-x-1">←</span>
          <span>Back to Main Page</span>
        </Link>

        {/* About Us button in the header */}
        <a
          href="https://about.us.mybabb.com"
          className="px-6 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md active:scale-95"
        >
          About Us
        </a>
      </header>

      {/* Main Content Profile Card */}
      <main className="w-full max-w-4xl z-10 flex flex-col gap-12">
        {/* Profile Hero Box */}
        <section className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>

          {/* Profile Image with Status Indicator */}
          <div className="relative group flex-shrink-0">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src={FunkyBird}
                alt="Blair - Digital Artist & Media Creator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-slate-900 border border-slate-700 rounded-full px-3 py-1 flex items-center gap-2 shadow-lg">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Available
              </span>
            </div>
          </div>

          {/* Profile Bio */}
          <div className="flex flex-col text-center md:text-left gap-3">
            <span className="text-amber-400 font-mono text-sm tracking-widest uppercase font-semibold">
              Digital Artist & Creative Media Specialist
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Blair
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-1">
              Crafting engaging visual content—from original digital illustration and social media graphics to video editing, motion assets, and creative design systems that make brands pop.
            </p>

            {/* Brain Buddy Logo + Animated Pop-up Badge */}
            <div className="flex items-center justify-center md:justify-start mt-4">
              <a
                href="https://mybabb.com/techsupportpage"
                aria-label="Get Brain Buddy Tech Support"
                className="group flex items-center gap-3 hover:opacity-95 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 rounded-xl"
              >
                <div className="p-1 bg-slate-900/60 border border-slate-800 rounded-lg shrink-0 group-hover:border-amber-400/50 transition-colors">
                  <img
                    src={BlankBrain}
                    alt="Brain Buddy Logo"
                    className="w-14 h-14 object-contain opacity-90"
                  />
                </div>

                {/* Pop-up Tooltip Badge inside the link */}
                <div className="relative animate-bounce bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg border border-amber-300 flex items-center gap-1 group-hover:bg-amber-300 transition-colors">
                  <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 group-hover:bg-amber-300 rotate-45 rounded-xs transition-colors"></span>
                  <span className="relative z-10 whitespace-nowrap">Get Tech Support here</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Skills & Expertise Section */}
        <section id="skills" className="flex flex-col gap-6">
          <h2 className="text-xl font-bold text-slate-200 flex items-center gap-3">
            <span className="w-2 h-6 bg-amber-400 rounded-full"></span>
            Artistic & Media Production Expertise
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-amber-400/30 transition-all flex items-center justify-center text-center shadow-sm"
              >
                <span className="text-slate-300 font-medium text-sm">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Landing Page Box */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-amber-200">
              Looking for our main landing page?
            </h3>
            <p className="text-slate-400 text-sm">
              Explore all our features, services, and tech solutions over at mybabb.com.
            </p>
          </div>

          <a
            href="https://mybabb.com"
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-amber-400/30 text-amber-300 font-mono text-sm font-semibold transition-all hover:border-amber-400/60"
          >
            Go to mybabb.com →
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-xs text-slate-500 border-t border-slate-800/60 pt-6 w-full max-w-4xl">
        © {new Date().getFullYear()} Brain Buddy's Tech Support. All rights reserved.
      </footer>
    </div>
  );
};

export default Blair;
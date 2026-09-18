 
import "./AMainFrontPage.css";
import BlankBrain from "/BrainBuddy100px.png"; // Adjust path as needed
import Me from "../../Images/Me.webp";
import Alice from "../../Images/Alice.webp"; 
import Bruce from "../../Images/Bruce.webp";
import Amber from "../../Images/Amber.webp";
const BrainBuddys = () => {
  return (
    <div className="grid grid-cols-1 min-[900px]:grid-cols-[1fr_minmax(auto,900px)_1fr] w-full">
      
      {/* LEFT SIDEBAR */}
      <aside className="hidden min-[900px]:block bg-slate-50/10 border-r border-gray-200/20 p-4">
      
      </aside>

      {/* MAIN CONTENT */}
      <main className="relative flex flex-col items-center w-full pb-32 px-4">

        {/* Logo */}
        <a 
          href="https://mybabb.com/TechSupportPage"
          className="absolute top-4 left-4 z-20 w-[100px] h-[100px] hover:opacity-85"
        >
          <img src={BlankBrain} alt="Brain Buddy Image Icon" className="w-full h-full object-contain" />
        </a>

        {/* Hero Title */}
        <section className="relative flex flex-col items-center justify-center w-full max-w-xl mx-auto mt-24 sm:mt-32 z-10">
          <article className="w-full flex flex-col items-center">
            <header className="brainBuddysTitleBox relative flex flex-col items-center w-full h-fit p-2 z-10">
              <h1 className="BrainBuddysH1 text-center text-xl sm:text-4xl z-10 rounded-xl p-2 bg-[#33626e] px-4 bg-opacity-90 font-PTSerif-Bold">
                <span className="whitespace-nowrap text-amber-100">Brain&nbsp;Buddy&apos;s</span>
              </h1>
              <br />
              <span className="relative text-amber-100 text-center text-xs sm:text-2xl mt-[-1rem] sm:mt-0">
                Brett&apos;s Web Development and Technical Support
              </span>
            </header>
            
            <p className="visually-hidden">
              Brain Buddy`s is your trusted technical support hub, providing expert assistance in web development, troubleshooting, and optimization.
            </p>
          </article>
        </section>

        {/* 4 REPRESENTATIVE IMAGES WITH BADGES */}
        <section className="w-full max-w-[600px] min-[900px]:max-w-full mt-12 z-10">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-8 justify-items-center">
            
            {/* Representative 1 - Available */}
            <a href="https://contact.mybabb.com">
            <div className="imageCardContainer">
              <span className="statusBadge badgeAvailable">🟢 Available</span>
              <img 
                src={Me} 
                alt="Representative 1" 
                className="representativeImage" 
              />
            </div>
       </a>

       
            {/* Representative 2 - Unavailable */}
            <div className="imageCardContainer">
              <span className="statusBadge badgeUnavailable">⭕-Offline</span>
              <img 
                src={Amber} 
                alt="Representative 2" 
                className="representativeImage" 
              />
            </div>

            {/* Representative 3 - Unavailable */}
            <div className="imageCardContainer">
              <span className="statusBadge badgeUnavailable">⭕-Offline</span>
              <img 
                src={Alice} 
                alt="Representative 3" 
                className="representativeImage" 
              />
            </div>

            {/* Representative 4 - Unavailable */}
            <div className="imageCardContainer">
              <span className="statusBadge badgeUnavailable">⭕-Offline</span>
              <img 
                src={Bruce} 
                alt="Representative 4" 
                className="representativeImage" 
              />
            </div>

          </div>
        </section>

      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="hidden min-[900px]:block bg-slate-50/10 border-l border-gray-200/20 p-4">
       
      </aside>

    </div>
  );
};

export default BrainBuddys;
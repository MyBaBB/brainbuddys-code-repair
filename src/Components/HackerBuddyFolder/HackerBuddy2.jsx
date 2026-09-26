import HackerBuddy2 from "./CatGirlGlow-250x250-custom.webp";

import LightningBolt from "./Lightning";
import "./HackerBuddy.css";

const HackerBuddyButton2 = () => {
  return (
    <>
      <a
        href="https://about.us.mybabb.com "
        className=" dataToolTip81 dataToolTipStyles font-LibreBaskerville  
                                    hidden sm:block "
        data-tool-tip="Check out - About Us Page  "
      >
        <span className=" ">
          <LightningBolt />
        </span>
        <div className="hackerBuddyButtonHide relative z-10  m-auto hover:scale-95   ">
          <img
            src={HackerBuddy2} 
            alt="Hacker Buddy Batman 
        "
            width={"100px"}
            height={"100px"}
          />
        </div>
      </a>
    </>
  );
};

export default HackerBuddyButton2;

import React from "react";
import style from "../../styles/landingPage/heroSection.module.scss";
import Hero1 from "../../assets/heroImage1.png";
import Hero2 from "../../assets/heroImage2.png";
import HeroIcon from "../../assets/heroIcon.svg";

const HeroSection = () => {
  return (
    <div className={style.Container}>
      <div className={style.Title}>
        WELCOME TO RELOAD - WE ARE BRANDING AGENCY FROM LONDON
      </div>
      <div className={style.MainTitle}>
        <div>
          {" "}
          WE TRANSFORM{" "}
          <img src={Hero1} alt="hero section 1" width="100px" height="20px" />
        </div>
        <div>
          IDEAS INTO{" "}
          <img src={Hero2} alt="hero section 2" width="20px" height="20px" />{" "}
          THOUGHTS
        </div>
        <div> AND DIGITAL OUTCOMES</div>
      </div>
      <div className={style.Content}>
        <div>
          Provide the best service and without revision, we are ready to help
          your business grow more attractive and beauty visuals
        </div>

        <img src={HeroIcon} alt="hero icon" className={style.Icon} />
      </div>
    </div>
  );
};

export default HeroSection;

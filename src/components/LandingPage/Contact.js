import React from "react";
import style from "../../styles/landingPage/contact.module.scss";
import Icon1 from "../../assets/vector1.svg";
import Icon2 from "../../assets/vector2.svg";
import Icon3 from "../../assets/vector3.svg";
import Icon4 from "../../assets/vector4.svg";
import Icon5 from "../../assets/vector5.svg";
import Icon6 from "../../assets/vector6.svg";
import Icon7 from "../../assets/vector7.svg";

const Contact = () => {
  return (
    <div className={style.Container}>
      <div className={style.FirstSection}>
        <div className={style.iconsFirst}>
          <img src={Icon1} alt="icon" />
          <img src={Icon2} alt="icon" />
          <img src={Icon3} alt="icon" />
          <img src={Icon4} alt="icon" />
        </div>
        <div className={style.Content}>
          <div>
            <button className={style.ButtonContactMe}>CONTACT ME</button>
          </div>
          <div className={style.Message1}>
            Let’s start building your <br /> branding, <span>today.</span>
          </div>
          <div>
            <button className={style.ButtonStart}>Get started for free</button>

            <button className={style.ButtonContact}>Contact sales</button>
          </div>
        </div>
        <div className={style.iconsSecond}>
          <img src={Icon5} alt="icon" />
          <img src={Icon6} alt="icon" />
          <img src={Icon7} alt="icon" />
        </div>
      </div>
      <div className={style.SecondSection}>
        <div>
          <div>
            We would love to hear from you. Let’s work — <br /> together with
            Reload©
          </div>

          <button className={style.ButtonContact}>contact us</button>
        </div>
        <div className={style.ContactParts}>
          <div>
            <div className={style.ContactPart}>
              <div>Business requires</div>
              <div>hello@colstic.com</div>
              <div>+27 123 456 789</div>
            </div>
            <div className={style.ContactPart}>
              <div>London</div>
              <div>
                133A Rye lane London SE15 4BQ <br /> UK
              </div>
            </div>
          </div>
          <div>
            <div className={style.ContactPart}>
              <div>Open positions</div>
              <div>Junior Graphic Design</div>
              <div>Videography</div>
              <div>Photography</div>
            </div>
            <div className={style.ContactPart}>
              <div>Cape town</div>
              <div>
                14 Upper pepper street CBD, 8001 <br />
                Cape Town
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Line}></div>
      <div className={style.SocialMedia}>
        <div>Colstic©</div>
        <div>
          <a href="/">DRIBBLE</a>
          <a href="/">INSTAGRAM</a>
          <a href="/">LINKEDIN</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

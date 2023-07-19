import React from "react";
import style from "../../styles/landingPage/about.module.scss";
import { AiOutlineCopyright } from "react-icons/ai";
import AboutVideo from "../../assets/video.svg";

const About = () => {
  return (
    <div className={style.Container}>
      <div className={style.Title}>
        About Reload <AiOutlineCopyright />
      </div>
      <div className={style.Content}>
        <div>
          AN INTERNATIONAL DIGITAL DESIGN STUDIO REIMAGINING HOW PEOPLE CONNECT
          WITH BRANDS.
        </div>
        <div>
          <div>
            We're a small team of curious humans who create work we’re proud of
            for people and brands we believe in. With collaboration at the heart
            of every project, we identify what skills are required and then
            bring the best people together to create something truly
            extraordinary.{" "}
          </div>
          <div>
            <button>Show detail — about us</button>
          </div>
        </div>
      </div>

      <div>
        <img src={AboutVideo} alt="about video" className={style.Video} />
      </div>
      <div className={style.Label}>
        <div>
          showcase work <span>Reload</span>
          <AiOutlineCopyright />
        </div>
        <div>showcase project 2016-2023</div>
      </div>
    </div>
  );
};

export default About;
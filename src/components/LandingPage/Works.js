import React from "react";
import AbstractWorks from "../../assets/abstractFeature.svg";
import style from "../../styles/landingPage/works.module.scss";
import Feature1 from "../../assets/feature1.svg";
import Feature2 from "../../assets/feature2.svg";
import Feature3 from "../../assets/feature3.svg";
import Feature4 from "../../assets/feature4.svg";
import Feature5 from "../../assets/feature5.svg";
import Feature6 from "../../assets/feature6.svg";

const Works = () => {
  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <div>Featured works from Reload©</div>
        <div>
          All featured works from Colstic and you can see more the projects
        </div>
        <div>
          <button>See detail — our works</button>
        </div>
        <div>
          <img
            src={AbstractWorks}
            alt="abstract works"
            className={style.Abstract}
          />
        </div>
      </div>
      <div className={style.Right}>
        <div className={style.Images}>
          <div>
            <img src={Feature1} alt="work" />
            <p>Hitachi Digital Brand Ecosystem.</p>
          </div>
          <div>
            <img src={Feature2} alt="work" />
            <p>Stråbe</p>
          </div>
        </div>
        <div className={style.Images}>
          <div>
            <img src={Feature3} alt="work" />
            <p>Commons.</p>
          </div>
          <div>
            <img src={Feature4} alt="work" />
            <p>Aeizei</p>
          </div>
        </div>
        <div className={style.Images}>
          <div>
            <img src={Feature5} alt="work" />
            <p>Zvurçyk Fashion</p>
          </div>
          <div>
            <img src={Feature6} alt="work" />
            <p>Lancome</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;

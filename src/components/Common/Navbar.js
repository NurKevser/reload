import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import style from "../../styles/navbar.module.scss";
import LogoLeft from "../../assets/logoLeft.svg";
import LogoRight from "../../assets/logoRight.svg";

const Navbar = () => {
  return (
    <div className={style.Container}>
      <div className={style.LeftSide}>
        <div>
          <img
            src={LogoLeft}
            alt="logo left arrow"
            className={style.LogoLeft}
          />
          <img
            src={LogoRight}
            alt="logo right arrow"
            className={style.LogoRight}
          />
        </div>
        <div>Reload Case</div>
      </div>
      <div className={style.RightSide}>
        <button>Let's Talk</button>
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import style from "../styles/hamburgerMenu.module.scss";

const HamburgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={`${openMenu && style.OpenMenu} ${style.Menu}`}
      onClick={() => setOpenMenu(!openMenu)}
    >
      <span></span>
    </div>
  );
};

export default HamburgerMenu;

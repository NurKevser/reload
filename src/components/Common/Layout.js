import React from "react";
import Navbar from "./Navbar";
import style from "../../styles/layout.module.scss";

const Layout = (props) => {
  return (
    <div className={style.Layout}>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;

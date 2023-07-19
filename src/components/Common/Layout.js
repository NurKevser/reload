import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import style from "../../styles/layout.module.scss";

const Layout = (props) => {
  return (
    <div className={style.Layout}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

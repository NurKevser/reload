import React from "react";
import style from "../../styles/landingPage/services.module.scss";
import Abstract from "../../assets/abstract.svg";

const Services = () => {
  return (
    <div className={style.Container}>
      <div className={style.Left}>
        <div className={style.Title}>Our services from Reload©</div>{" "}
        <img src={Abstract} alt="abstract" />
      </div>
      <div className={style.Right}>
        <div className={style.Service}>
          <div className={style.ServiceTitle}>01.</div>
          <div>
            <div>
              <div className={style.ServiceTitle}>Strategy and consultacy</div>
              <div className={style.ServiceContent}>
                Because we have a global vision, we can see the project as a
                whole. This enables us to understand its needs, identify
                opportunities, define and map process, and effectively to guide
                each stage of the project to deliver the best results.
              </div>
            </div>
          </div>
        </div>
        <div className={style.Line}></div>
        <div className={style.Service}>
          <div className={style.ServiceTitle}>02.</div>
          <div>
            <div>
              <div className={style.ServiceTitle}>Digital branding</div>
              <div className={style.ServiceContent}>
                We define and create digital brands with soul that transmit
                those intangible values that make the brand recognizable and
                remember in many different ways.
              </div>
            </div>
          </div>
        </div>
        <div className={style.Line}></div>
        <div className={style.Service}>
          <div className={style.ServiceTitle}>03.</div>
          <div>
            <div>
              <div className={style.ServiceTitle}>Video production</div>
              <div className={style.ServiceContent}>
                Video production is the process of producing video content for
                video. It is the equivalent of filmmaking,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

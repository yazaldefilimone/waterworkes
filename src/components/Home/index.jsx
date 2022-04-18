import React from "react";

import style from "./styles.module.scss";
import homeBg from "../../assets/Group2.svg";
import icon from "../../assets/icon.svg";
export const Home = () => {
  return (
    <article className={style.section}>
      <div className={style.container}>
        <div>
          <h1>
            Protect Our <br /> <span>Water Buddies</span>
          </h1>
          <p>
            You did not inherit the Earths water from your ancestors. You awe it
            to your future generations ahead.
          </p>
          <div>
            <button>Lets Begin</button>
            <button>
              <img src={icon} alt="icon" />
              Watch Video
            </button>
          </div>
        </div>
        <div className={style.bg}>
          <img src={homeBg} alt="" />
        </div>
      </div>
    </article>
  );
};

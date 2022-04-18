import React from "react";

import style from "./styles.module.scss";

export const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

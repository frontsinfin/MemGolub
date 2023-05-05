import React from "react";
import cl from "./ButtonTile.module.css";

const ButtonTile = (props) => {
  return <div {...props} className={cl.ButtonTile}></div>;
};

export default ButtonTile;

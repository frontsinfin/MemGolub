import React from "react";
import { NavLink } from "react-router-dom";
import cl from "../style/TestHeader.module.css";

const TestHeader = () => {
  return (
    <>
      <div className={cl.Logo}>
        <NavLink className={cl.a} id="accentTheme" to="/">
          Logo
        </NavLink>
      </div>
      <div className={cl.Container}>
        <div className={cl.List}>
          <NavLink className={cl.a} id="accentTheme" to="/list">
            Все тесты
          </NavLink>
          <NavLink className={cl.a} id="accentTheme" to="/about">
            О нас
          </NavLink>
        </div>
        <div className={cl.Contacts}>
          <NavLink className={cl.a} id="accentTheme" to="/vk">
            vk
          </NavLink>
          <NavLink className={cl.a} id="accentTheme" to="/inst">
            inst
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default TestHeader;

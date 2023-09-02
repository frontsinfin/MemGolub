import React, { useState } from "react";
import cl from "./TestHeader.module.css";
import light from "../../img/ThemeIconLight.svg";
import dark from "../../img/ThemeIconDark.svg";
import useTheme from "../../hooks/useTheme";
import CustomLink from "../customLink/CustomLink";

const TestHeader = () => {
  const icons = [dark, light];
  const { isDark, setIsDark } = useTheme();
  const [iconIndex, setIconIndex] = useState(1);
  const [isMobileNavBar, setIsMobileNavBar] = useState(false);
  const themeToggle = () => {
    setIsDark(!isDark);
    setIconIndex((prev) => (prev === 1 ? 0 : 1));
  };

  return (
    <div className={cl.Container}>
      <div className={cl.Header}>
        <CustomLink className={cl.Button} id="accentTheme" to="/">
          Logo
        </CustomLink>
        <button
          className={cl.MenuButton}
          onClick={() => setIsMobileNavBar(!isMobileNavBar)}
          id="accentTheme"
        ></button>
        {/* {isMobileNavBar && (
          <> */}
        <CustomLink className={cl.Button} id="accentTheme" to="/list">
          Все тесты
        </CustomLink>
        <CustomLink className={cl.Button} id="accentTheme" to="/about">
          О нас
        </CustomLink>
        <CustomLink className={cl.Button} id="accentTheme" to="/vk">
          vk
        </CustomLink>
        {/* </>
        )} */}
      </div>
      <button id="accentTheme" onClick={themeToggle} className={cl.Button}>
        <img src={icons[iconIndex]} alt="" />
      </button>
    </div>
  );
};

export default TestHeader;

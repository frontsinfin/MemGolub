import React from "react";
import cl from "./TestHeader.module.css";
import ButtonTile from "../UI/button/ButtonTile/ButtonTile";

const TestHeader = ({ stateRoute }) => {
  const getElementNavbar = (e) => {
  };

  const logo = stateRoute.slice(0, 1);
  const navBarlist = stateRoute.slice(1, 4);
  const navBarContacts = stateRoute.slice(4, 7);

  return (
    <>
      <div className={cl.Logo}>
        {logo.map((el, e) => (
          <ButtonTile onClick={() => getElementNavbar(e)} key={el.id}>
            {el.name}
          </ButtonTile>
        ))}
      </div>
      <div className={cl.NavBarContainer}>
        <div className={cl.NavBarList}>
          {navBarlist.map((el, e) => (
            <ButtonTile onClick={() => getElementNavbar(e)} key={el.id}>
              {el.name}
            </ButtonTile>
          ))}
        </div>
        <div className={cl.NavBarContacts}>
          {navBarContacts.map((el, e) => (
            <ButtonTile onClick={() => getElementNavbar(e)} key={el.id}>
              {el.name}
            </ButtonTile>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestHeader;

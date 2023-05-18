import React, { useState } from "react";
import cl from "./TestApp.module.css";
import TestForm from "../TestForm/TestForm";
import TestList from "../TestList/TestList";
import TestHeader from "../TestHeader/TestHeader";
import objTest from "../../dataObj";

function TestApp() {
  const [stateTestSelection, setStateTestSelection] = useState({
    ...objTest[0],
  });
  const [stateRoute, setStateRoute] = useState([
    { id: 1, name: "mem golub" },
    { id: 2, name: "Главная" },
    { id: 3, name: "О нас" },
    { id: 4, name: "Авторизация" },
    { id: 6, name: "vk" },
    { id: 7, name: "inst" },
  ]);

  const getTestContent = (e) => {
    setStateTestSelection({ ...objTest[e] });
    console.log(stateTestSelection);
  };

  return (
    <div className={cl.Container}>
      <div className={cl.Header}>
        <TestHeader stateRoute={stateRoute} />
      </div>
      <div className={cl.Body}>
        <TestList
          getTestContent={getTestContent}
          stateTestSelection={stateTestSelection}
        />
        <TestForm stateTestSelection={stateTestSelection} />
      </div>
    </div>
  );
}

export default TestApp;

import React, { useState } from "react";
import cl from "./TestApp.module.css";
import TestForm from "../TestForm/TestForm";
import TestList from "../TestList/TestList";
import TestHeader from "../TestHeader/TestHeader";

function TestApp() {
  const [stateRoute, setStateRoute] = useState([
    { id: 1, name: "mem golub" },
    { id: 2, name: "Главная" },
    { id: 3, name: "О нас" },
    { id: 4, name: "Авторизация" },
    { id: 6, name: "vk" },
    { id: 7, name: "inst" },
  ]);

  return (
    <div className={cl.Container}>
      <div className={cl.Header}>
        <TestHeader stateRoute={stateRoute} />
      </div>
      <div className={cl.Body}>
        <TestList />
        <TestForm />
      </div>
    </div>
  );
}

export default TestApp;

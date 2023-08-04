import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import cl from "../style/TestApp.module.css";
import TestList from "./TestList";
import TestHeader from "./TestHeader";
import useTheme from "../hooks/useTheme";
import axios from "axios";
import Light from "../img/ThemeIconLight.svg";
import Dark from "../img/ThemeIconDark.svg";
import Main from "./Main";
import NotFound from "./NoFound";
import SingleTest from "./SingleTest";

function TestApp() {
  const [dataTest, setDataTest] = useState();
  const { isDark, setIsDark } = useTheme();
  useEffect(() => {
    axios.get(`http://localhost:3001/dataBase`).then((response) => {
      setDataTest(response.data);
    });
  }, []);
  if (!dataTest) return null;

  return (
    <div className={cl.Container}>
      <div className={cl.Header}>
        <TestHeader />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<TestList dataTest={dataTest} />} />
        <Route path="/list/:id" element={<SingleTest dataTest={dataTest} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <button
        id="accentTheme"
        className={cl.ThemeButton}
        onClick={() => setIsDark(!isDark)}
      >
        <img src={isDark ? Dark : Light} alt="" />
      </button>
    </div>
  );
}

export default TestApp;

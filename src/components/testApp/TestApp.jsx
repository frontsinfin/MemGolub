import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import cl from "./TestApp.module.css";
import TestList from "../testList/TestList";
import TestHeader from "../testHeader/TestHeader";
import axios from "axios";
import Main from "../main/Main";
import NotFound from "../notFound/NotFound";
import SingleTest from "../singleTest/SingleTest";

function TestApp() {
  const [dataTest, setDataTest] = useState();
  useEffect(() => {
    axios
      .get(`https://64a04699ed3c41bdd7a72a2a.mockapi.io/dataBase`)
      .then((response) => {
        setDataTest(response.data);
      });
  }, []);
  if (!dataTest) return null;

  return (
    <div className={cl.Container} id="Container">
      <TestHeader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<TestList dataTest={dataTest} />} />
        <Route path="/list/:id" element={<SingleTest dataTest={dataTest} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default TestApp;

import React from "react";
import objTest from "../../dataObj";
import cl from "./TestList.module.css";

const TestList = () => {
  return (
    <div className={cl.List}>
      {objTest.map((test) => (
        <button className={cl.Form} key={test.testTitle}>
          <div className={cl.Title}>{test.testTitle}</div>
          <div className={cl.Description}>{test.testDescription}</div>
        </button>
      ))}
    </div>
  );
};

export default TestList;

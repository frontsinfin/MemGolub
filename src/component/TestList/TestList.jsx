import React from "react";
import objTest from "../../dataObj";
import cl from "./TestList.module.css";

const TestList = ({ getTestContent, stateTestSelection }) => {
  return (
    <div className={cl.List}>
      {objTest.map((testItem, e) => (
        <button
          onClick={() => getTestContent(e)}
          className={cl.Form}
          key={testItem.testTitle}
        >
          <div className={cl.Title}>{testItem.testTitle}</div>
          <div className={cl.Description}>{testItem.testDescription}</div>
        </button>
      ))}
    </div>
  );
};

export default TestList;

import { useState } from "react";
import cl from "./SingleTest.module.css";
import { useParams } from "react-router-dom";
import TestResult from "../testResult/TestResult";
import LeftBar from "../leftBar/LeftBar";
import TestQuestions from "../testQuestions/TestQuestions";
const SingleTest = ({ dataTest }) => {
  const [nextQuestions, setNextQuestions] = useState(0);
  const [resultCounter, setResultCounter] = useState(0);

  const { id } = useParams();
  const idx = id - 1;
  const activeTest = dataTest[idx];

  return (
    <div className={cl.Container}>
      <div className={cl.BaseContent} id="accentTheme">
        {activeTest.testQuestions.length <= nextQuestions ? (
          <TestResult activeTest={activeTest} resultCounter={resultCounter} />
        ) : (
          <TestQuestions
            activeTest={activeTest}
            setNextQuestions={setNextQuestions}
            nextQuestions={nextQuestions}
            resultCounter={resultCounter}
            setResultCounter={setResultCounter}
          />
        )}
      </div>
    </div>
  );
};

export default SingleTest;

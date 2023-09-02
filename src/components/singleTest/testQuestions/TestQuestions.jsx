import { useState } from "react";
import ProgressBar from "../../../UI/progressBar/ProgressBar";
import BeginTest from "../BeginTest";
import QuestionsList from "../QuestionsList";

const BaseContent = ({
  activeTest,
  setNextQuestions,
  nextQuestions,
  resultCounter,
  setResultCounter,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const widthVar = (nextQuestions / activeTest.testQuestions.length) * 100;

  const clickNextQuestions = (id) => {
    setNextQuestions(nextQuestions + 1);
    for (let i = 0; i < 5; i++) {
      switch (id) {
        case i:
          setResultCounter(resultCounter + i * 5 - 5);
          break;
      }
    }
  };
  return (
    <>
      {isVisible ? (
        <BeginTest
          activeTest={activeTest}
          onClick={() => setIsVisible(!isVisible)}
        />
      ) : (
        <div>
          <ProgressBar widthVar={widthVar} />
          <QuestionsList
            clickNextQuestions={clickNextQuestions}
            activeTest={activeTest}
            nextQuestions={nextQuestions}
          />
        </div>
      )}
    </>
  );
};

export default BaseContent;

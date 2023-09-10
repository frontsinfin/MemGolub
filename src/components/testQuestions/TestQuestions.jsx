import { useState } from "react";
import ProgressBar from "../../UI/progressBar/ProgressBar";
import BeginTest from "../beginTest/BeginTest";
import QuestionsList from "../questionsList/QuestionsList";

const TestQuestions = ({
  activeTest,
  setNextQuestions,
  nextQuestions,
  resultCounter,
  setResultCounter,
}) => {
  const [isVisible, setIsVisible] = useState(true);

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
  console.log(resultCounter);
  return (
    <>
      {isVisible ? (
        <BeginTest
          activeTest={activeTest}
          onClick={() => setIsVisible(!isVisible)}
        />
      ) : (
        <div>
          <ProgressBar activeTest={activeTest} nextQuestions={nextQuestions} />
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

export default TestQuestions;

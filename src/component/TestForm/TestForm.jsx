import { useState } from "react";
import cl from "./TestForm.module.css";
import objTest from "../../dataObj";
import TestResult from "../TestResult/TestResult";
import TestQuestions from "../TestQuestions/TestQuestions";

function TestForm() {
  const questions = objTest[0].testQuestions[0];

  const [step, setStep] = useState(0);
  const [stateResult, setStateResult] = useState(0);
  const getEvent = (e) => {
    if (questions[step].options[e].id === 1) {
      setStateResult(stateResult + 1);
    }
    if (questions[step].options[e].id === 2) {
      setStateResult(stateResult + 2);
    }
    if (questions[step].options[e].id === 3) {
      setStateResult(stateResult + 3);
    }
    if (questions[step].options[e].id === 4) {
      setStateResult(stateResult + 4);
    }

    setStep(step + 1);
  };

  return (
    <div className={cl.TestForm}>
      {step !== questions.length ? (
        <TestQuestions
          step={step}
          setStep={setStep}
          getEvent={getEvent}
          questions={questions}
        />
      ) : (
        <TestResult stateResult={stateResult} />
      )}
    </div>
  );
}

export default TestForm;

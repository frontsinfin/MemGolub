import { useState } from "react";
import cl from "./TestForm.module.css";
import TestResult from "../TestResult/TestResult";
import TestQuestions from "../TestQuestions/TestQuestions";

function TestForm({ stateTestSelection }) {
  const [step, setStep] = useState(0);

  const [stateResult, setStateResult] = useState(0);
  const getEvent = (e) => {
    const optionId = stateTestSelection.testQuestions[step].options[e].id;
    if (optionId === 1) {
      setStateResult(stateResult + 1);
    }
    if (optionId === 2) {
      setStateResult(stateResult + 2);
    }
    if (optionId === 3) {
      setStateResult(stateResult + 3);
    }
    if (optionId === 4) {
      setStateResult(stateResult + 4);
    }
    setStep(step + 1);
  };
  return (
    <div className={cl.TestForm}>
      {step !== stateTestSelection.testQuestions.length ? (
        <TestQuestions
          step={step}
          setStep={setStep}
          getEvent={getEvent}
          stateTestSelection={stateTestSelection}
        />
      ) : (
        <TestResult
          stateResult={stateResult}
          stateTestSelection={stateTestSelection}
        />
      )}
    </div>
  );
}

export default TestForm;

import cl from "./TestQuestions.module.css";
import ButtonOption from "../UI/button/ButtonOption";
import ProgressBar from "../UI/progressBar/ProgressBar";

const TestQuestions = ({ step, getEvent, stateTestSelection }) => {
  const widthVar = Math.round(
    (step / stateTestSelection.testQuestions.length) * 100
  );
  const optionList = stateTestSelection.testQuestions[step].options.map(
    (option, e) => {
      return (
        <ButtonOption
          onClick={() => getEvent(e)}
          option={option}
          key={option.id}
        ></ButtonOption>
      );
    }
  );
  return (
    <div className={cl.formQuestion}>
      <div>{stateTestSelection.testTitle}</div>
      <ProgressBar widthVar={widthVar}></ProgressBar>
      <div className={cl.question}>
        {stateTestSelection.testQuestions[step].title}
      </div>
      <div>{optionList}</div>
    </div>
  );
};

export default TestQuestions;

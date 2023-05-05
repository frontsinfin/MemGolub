import cl from "./TestQuestions.module.css";
import ButtonOption from "../UI/button/ButtonOption";
import ProgressBar from "../UI/progressBar/ProgressBar";

const TestQuestions = ({ step, getEvent, questions }) => {
  const widthVar = Math.round((step / questions.length) * 100);
  const optionList = questions[step].options.map((option, e) => {
    return (
      <ButtonOption
        onClick={() => getEvent(e)}
        option={option}
        key={option.id}
      ></ButtonOption>
    );
  });
  return (
    <div className={cl.formQuestion}>
      <ProgressBar widthVar={widthVar}></ProgressBar>
      <div className={cl.question}>{questions[step].title}</div>
      <div>{optionList}</div>
    </div>
  );
};

export default TestQuestions;

import cl from "./ProgressBar.module.css";

const ProgressBar = ({ nextQuestions, activeTest }) => {
  const widthVar = (nextQuestions / activeTest.testQuestions.length) * 100;
  return (
    <div className={cl.Container}>
      <div className={cl.Back} id="themeBack">
        <div
          className={cl.Front}
          id="themeBar"
          style={{ width: `${widthVar}%` }}
        ></div>
      </div>
      <h3 className={cl.Counter}>
        {nextQuestions + 1}/{activeTest.testQuestions.length}
      </h3>
    </div>
  );
};

export default ProgressBar;

// `${widthvar}%`

import cl from "./TestResult.module.css";

const TestResult = ({ activeTest, resultCounter }) => {
  let type = Math.round(resultCounter / 15);
  console.log(type);
  console.log(activeTest.testTypes[type].title);

  return (
    <div className={cl.Container}>
      <h2 className={cl.Title}> Вы: {activeTest.testTypes[type].title}</h2>
      <div className={cl.Description}>{activeTest.testTypes[type].body}</div>
    </div>
  );
};

export default TestResult;

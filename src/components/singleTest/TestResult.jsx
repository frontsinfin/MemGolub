const TestResult = ({ activeTest, resultCounter }) => {
  let type = resultCounter / 15;

  return (
    <div>
      <h1> Вы: {activeTest.testTypes[type].title}</h1>
      <div>{activeTest.testTypes[type].body}</div>
    </div>
  );
};

export default TestResult;

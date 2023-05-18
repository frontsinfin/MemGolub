const TestResult = ({ stateResult, stateTestSelection }) => {
  const types = stateTestSelection.testTypes;

  console.log(types);
  if (stateResult < 10) {
    return <div>{types.typeOne}</div>;
  }
  if (stateResult < 13) {
    return <div>{types.typeTwo}</div>;
  }
  if (stateResult < 16) {
    return <div>{types.typeThree}</div>;
  }
  if (stateResult < 19) {
    return <div>{types.typeFore}</div>;
  }
  if (stateResult < 22) {
    return <div>{types.typeFive}</div>;
  } else {
    return <div>{types.typeSix}</div>;
  }
};

export default TestResult;

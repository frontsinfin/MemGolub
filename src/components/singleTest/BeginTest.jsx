import cl from "./SingleTest.module.css";
const BeginTest = ({ activeTest, onClick }) => {
  return (
    <div>
      <h1>{activeTest.testTitle}</h1>
      <h2>{activeTest.testDescription}</h2>
      <button onClick={onClick} className={cl.Button} id="themeBack">
        Начать тест
      </button>
    </div>
  );
};

export default BeginTest;

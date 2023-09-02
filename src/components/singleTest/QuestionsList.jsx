import cl from "./SingleTest.module.css";
const QuestionsList = ({ activeTest, nextQuestions, clickNextQuestions }) => {
  const btnClickFunc = (id) => {
    clickNextQuestions(id);
  };
  return (
    <section>
      <h2>{activeTest.testQuestions[nextQuestions].title}</h2>
      <div>
        {activeTest.testQuestions[nextQuestions].options.map((item) => (
          <button
            key={item.id}
            className={cl.Button}
            onClick={() => btnClickFunc(item.id)}
            id="themeBack"
          >
            {item.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuestionsList;

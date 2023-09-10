import cl from "./QuestionsList.module.css";
const QuestionsList = ({ activeTest, nextQuestions, clickNextQuestions }) => {
  const btnClickFunc = (id) => {
    clickNextQuestions(id);
  };
  return (
    <section className={cl.Section}>
      <h2 className={cl.Title}>
        {activeTest.testQuestions[nextQuestions].title}
      </h2>
      <div className={cl.Container}>
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

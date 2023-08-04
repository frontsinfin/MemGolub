import { useState } from "react";
import cl from "../style/SingleTest.module.css";
import { useParams } from "react-router-dom";
import ProgressBar from "../UI/progressBar/ProgressBar";
const SingleTest = ({ dataTest }) => {
  const [nextQuestions, setNextQuestions] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const { id } = useParams();

  const idx = id - 1;
  const widthVar = (nextQuestions / dataTest[idx].testQuestions.length) * 100;

  return (
    <div className={cl.Container} id="accentTheme">
      {isVisible ? (
        <>
          <div>
            <h1>{dataTest[idx].testTitle}</h1>
            <h2>{dataTest[idx].testDescription}</h2>
            <a
              className={cl.Button}
              id="accentTheme"
              onClick={() => setIsVisible(!isVisible)}
            >
              Начать тест
            </a>
          </div>
        </>
      ) : (
        <section>
          <ProgressBar widthVar={widthVar} />
          <h2>{dataTest[idx].testQuestions[nextQuestions].title}</h2>
          {dataTest[idx].testQuestions[nextQuestions].options.map((item) => (
            <a
              key={item.id}
              className={cl.Button}
              onClick={() => setNextQuestions(nextQuestions + 1)}
              id="accentTheme"
            >
              {item.text}
            </a>
          ))}
        </section>
      )}
    </div>
  );
};

export default SingleTest;

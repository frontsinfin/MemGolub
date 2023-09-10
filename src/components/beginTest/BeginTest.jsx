import cl from "./BeginTest.module.css";
import arrow from "../../img/arrow.svg";
const BeginTest = ({ activeTest, onClick }) => {
  let a = "http://htmlweb.ru/api/service/sex?sex=Сергей&html&nolimit";
  let upperCaseTitle = activeTest.testTitle;
  let title =
    upperCaseTitle[0].toUpperCase() + upperCaseTitle.slice(1).toLowerCase();
  return (
    <div className={cl.Container}>
      <h4 className={cl.Subtitle}>Какой ты:</h4>
      <h1 className={cl.Title}>{title}</h1>
      <h3 className={cl.Description}>{activeTest.testDescription}</h3>
      <button onClick={onClick} className={cl.Button} id="themeBack">
        <span className={cl.Span}>НАЧАТЬ</span>
        <img src={arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default BeginTest;

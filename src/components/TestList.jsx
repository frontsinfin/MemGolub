import { Link } from "react-router-dom";
import cl from "../style/TestList.module.css";

const TestList = ({ dataTest }) => {
  return (
    <div className={cl.List} id="accentTheme">
      {dataTest.map((itemTest) => (
        <Link
          to={`/list/${itemTest.id}`}
          className={cl.Container}
          id="themeButton"
          key={itemTest.id}
        >
          <img src={itemTest.testImg} alt="" />
          <h3 className={cl.Title}>{itemTest.testTitle}</h3>
        </Link>
      ))}
    </div>
  );
};

export default TestList;

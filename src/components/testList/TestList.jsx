import { Link } from "react-router-dom";
import cl from "./TestList.module.css";

const TestList = ({ dataTest }) => {
  return (
    <div className={cl.List}>
      {dataTest.map((itemTest) => (
        <Link
          to={`/list/${itemTest.id}`}
          className={cl.Container}
          id="accentTheme"
          key={itemTest.id}
        >
          <div className={cl.ImgContainer}>
            <img className={cl.img} src={itemTest.testImg} alt="" />
          </div>
          <div className={cl.TitleContainer}>
            <h4 className={cl.SubTitle}>Какой ты</h4>
            <h1 className={cl.Title}>{itemTest.testTitle}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TestList;

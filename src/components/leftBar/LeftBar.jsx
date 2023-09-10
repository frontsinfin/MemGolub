import cl from "./LeftBar.module.css";
const LeftBar = ({ activeTest }) => {
  return (
    <div className={cl.LeftBar} id="accentTheme">
      <img src={activeTest.testImg} alt="Logo" />
    </div>
  );
};

export default LeftBar;

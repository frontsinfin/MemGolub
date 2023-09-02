import cl from "./ProgressBar.module.css";

const ProgressBar = ({ widthVar }) => {
  return (
    <div className="ProgressBar">
      <div className={cl.progressBarBack} id="themeBack">
        <div
          className={cl.progressBarFront}
          id="themeBar"
          style={{ width: `${widthVar}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

// `${widthvar}%`

import cl from "./ProgressBar.module.scss";

const ProgressBar = ({ widthVar }) => {
  return (
    <div className="ProgressBar">
      <div className={cl.progressBarBack}>
        <div
          className={cl.progressBarFront}
          style={{ width: `${widthVar}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;

// `${widthvar}%`

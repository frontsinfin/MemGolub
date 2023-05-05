import cl from "./ProgressBar.module.css";

const ProgressBarr = ({ widthVar }) => {
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

export default ProgressBarr;

// `${widthvar}%`

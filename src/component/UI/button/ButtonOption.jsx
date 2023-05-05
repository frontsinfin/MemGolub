import cl from "./ButtonOption.module.css";

const ButtonOption = (props) => {
  return (
    <button {...props} className={cl.buttonOption}>
      {props.option.id}.{props.option.text}
    </button>
  );
};
export default ButtonOption;

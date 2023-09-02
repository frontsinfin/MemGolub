import { Link, useMatch } from "react-router-dom";

const CustomLink = ({ to, children, ...props }) => {
  const match = useMatch(to);
  const id = match ? "themeIndicator" : "";
  return (
    <Link to={to} {...props} style={{ position: "relative" }}>
      {children}
      <div id={id}></div>
    </Link>
  );
};

export default CustomLink;

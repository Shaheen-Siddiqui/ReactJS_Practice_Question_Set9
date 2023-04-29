import { NavLink } from "react-router-dom";
export const Landing = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>My Email Box</h2>
      <strong>
        <NavLink to="/inbox">INBOX</NavLink> ||&nbsp;
        <NavLink to="/sent">SENT</NavLink>
      </strong>
    </div>
  );
};

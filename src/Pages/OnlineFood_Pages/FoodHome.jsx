import { NavLink } from "react-router-dom";

export const FoodHome = () => {
  return (
    <>
      <h1>“Welcome to neoG Food Ordering App”</h1>
      <NavLink to="/menu">
        <button>Go to Menu</button>{" "}
      </NavLink>
    </>
  );
};

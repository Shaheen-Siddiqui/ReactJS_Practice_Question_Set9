import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { OnlineFoodContext } from "../Context/OnlineFoodContext";
export const OnlineFoodHeader = () => {
  const { cartItem } = useContext(OnlineFoodContext);
  return (
    <>
      <NavLink to="/">Home</NavLink> ||
      <NavLink to="/menu">Menu</NavLink> ||
      <NavLink to="/cart">Cart</NavLink> {cartItem.length}||
    </>
  );
};

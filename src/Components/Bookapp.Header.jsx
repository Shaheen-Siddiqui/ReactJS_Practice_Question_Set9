import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../Context/BookContext";
export const BookappHeader = () => {
  const { favorites, done } = useContext(BookContext);
  return (
    <>
      <h5>
        <NavLink to="/">all books</NavLink> ||
        <NavLink to="/favorite">favoriate </NavLink>
        {favorites.length} ||
        <NavLink to="/read">read</NavLink> {done.length} ||
        <NavLink to="/profile">profile</NavLink> ||
      </h5>
    </>
  );
};

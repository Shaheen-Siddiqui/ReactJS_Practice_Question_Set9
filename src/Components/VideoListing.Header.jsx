import { NavLink } from "react-router-dom";
export const VideoListingHeader = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink> || &nbsp;
      <NavLink to="/video">Videos</NavLink> || &nbsp;
      <NavLink to="linkedvideos">Linked Videos</NavLink> || &nbsp;
      <NavLink to="watchlater">Watch Later</NavLink>
    </>
  );
};

import { NavLink } from "react-router-dom";
export const VideoHome = () => {
  return (
    <>
      <br />
      <br />

      <h3>welcome to video library</h3>
      <br />

      <h3>
        to browse all videos, click the below button or go to the videos Page
      </h3>
      <NavLink to="/video">
        <button>Explore videos</button>
      </NavLink>
    </>
  );
};

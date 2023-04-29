import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { VideoListingContext } from "../../Context/VideoListingContext";

export const IndivisualVideos = (item) => {
  const { addToLikedVideos, addToWatchLater, isAlreadyLiked } = useContext(
    VideoListingContext
  );
  const { title, id, thumbnail } = item;
  return (
    <div className="card" style={{ width: "18rem" }} key={id}>
      <img src={thumbnail} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <NavLink to="/video">Go back </NavLink>
        <br />
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => addToLikedVideos(item)}
        >
          {isAlreadyLiked(item) ? "Liked💝 " : "Like👍"}
        </button>
        <button
          className="btn btn-outline-dark btn-sm"
          onClick={() => addToWatchLater(item)}
        >
          Add to watch later
        </button>
      </div>
    </div>
  );
};

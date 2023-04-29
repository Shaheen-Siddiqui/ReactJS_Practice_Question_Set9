import { useContext } from "react";
import { VideoListingContext } from "../../Context/VideoListingContext";
import { NavLink } from "react-router-dom";

export const Videos = () => {
  const {
    videoData,
    addToLikedVideos,
    isAlreadyLiked,
    addToWatchLater
  } = useContext(VideoListingContext);

  return (
    <div style={{ display: "flex" }}>
      {videoData.map((item) => {
        const { id, title, thumbnail } = item;
        return (
          <div className="card" style={{ width: "18rem" }} key={id}>
            <img src={thumbnail} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>

              <NavLink to={`/indivisualpage/${id}`}>Watch here </NavLink>
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
      })}
    </div>
  );
};

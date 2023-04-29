import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { VideoListingContext } from "../../Context/VideoListingContext";

export const LikedVideos = () => {
  const { likedVideos, removeFromLikedVideos, addToWatchLater } = useContext(
    VideoListingContext
  );
  return (
    <>
      <h3>Liked videos 💝</h3>
      <div style={{ display: "flex" }}>
        {likedVideos.map((item) => {
          const { id, title, url, thumbnail } = item;
          return (
            <div className="card" style={{ width: "18rem" }} key={id}>
              <img src={thumbnail} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>

                <NavLink to={url}>Watch here </NavLink>
                <br />

                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => addToWatchLater(item)}
                >
                  Add to watch later <span>⌚</span>
                </button>
                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => removeFromLikedVideos(item)}
                >
                  Remove from liked
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

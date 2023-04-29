import { useContext } from "react";
import { VideoListingContext } from "../../Context/VideoListingContext";

export const WatchLater = () => {
  const {
    watchLaterVideos,
    removeFromWatchLaterVideos,
    addToLikedVideos,
    isAlreadyLiked
  } = useContext(VideoListingContext);
  return (
    <>
      <h3>watch later videos 👀</h3>
      <div style={{ display: "flex" }}>
        {watchLaterVideos.map((item) => {
          const { id, title, thumbnail } = item;
          return (
            <div className="card" style={{ width: "18rem" }} key={id}>
              <img src={thumbnail} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>

                {/* <NavLink to={url}>Watch here </NavLink> */}
                <br />
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => addToLikedVideos(item)}
                >
                  {isAlreadyLiked(item) ? "Liked💝 " : "Like👍"}
                </button>

                <button
                  className="btn btn-outline-dark btn-sm"
                  onClick={() => removeFromWatchLaterVideos(item)}
                >
                  Remove to watchLater
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

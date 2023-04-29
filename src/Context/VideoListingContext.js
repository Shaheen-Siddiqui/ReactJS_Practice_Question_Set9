import { createContext, useEffect, useState } from "react";
import { VideoListingfakeFetch } from "../DataBase/VideoListing.fakefetch";

export const VideoListingContext = createContext();

export const VideoListingContextProvider = ({ children }) => {
  const [videoData, setVideoData] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);
  const [watchLaterVideos, setWatchLaterVideos] = useState([]);

  useEffect(() => {
    async function obtainVideoData(params) {
      try {
        const response = await VideoListingfakeFetch(
          "https://example.com/api/videos"
        );
        setVideoData(response.data.videos);
      } catch (error) {
        console.log(error);
      }
    }
    obtainVideoData();
  }, []);

  const addToLikedVideos = (item) => {
    const isDuplicate = likedVideos.find(({ id }) => id === item.id);
    return !isDuplicate ? setLikedVideos([...likedVideos, item]) : item;
  };
  const isAlreadyLiked = (item) => likedVideos.find(({ id }) => id === item.id);

  const removeFromLikedVideos = (item) =>
    setLikedVideos((likedVideos) =>
      likedVideos.filter(({ id }) => id !== item.id)
    );

  const addToWatchLater = (item) => {
    const isDuplicate = watchLaterVideos.find(({ id }) => id === item.id);
    return !isDuplicate
      ? setWatchLaterVideos([...watchLaterVideos, item])
      : item;
  };

  const removeFromWatchLaterVideos = (item) => {
    setWatchLaterVideos((watchLaterVideos) =>
      watchLaterVideos.filter(({ id }) => id !== item.id)
    );
  };

  const value = {
    videoData,
    addToLikedVideos,
    isAlreadyLiked,
    likedVideos,
    removeFromLikedVideos,
    addToWatchLater,
    watchLaterVideos,
    removeFromWatchLaterVideos
  };
  return (
    <VideoListingContext.Provider value={value}>
      {children}
    </VideoListingContext.Provider>
  );
};

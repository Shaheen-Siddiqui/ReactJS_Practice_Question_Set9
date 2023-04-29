import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideoListingContext } from "../../Context/VideoListingContext";
import { IndivisualVideos } from "./IndivisualVideos";

export const IndivisualVideosData = () => {
  const { videoData } = useContext(VideoListingContext);
  const { videoId } = useParams();

  const ExploreMoreAboutIt = (videoData, videoId) =>
    videoData.find(({ id }) => id == videoId);

  const ExploreMoreAboutTheVideo = ExploreMoreAboutIt(videoData, videoId);

  return (
    <>
      <IndivisualVideos {...ExploreMoreAboutTheVideo} />
    </>
  );
};

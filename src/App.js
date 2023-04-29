import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// Email-app inports
import { Landing } from "./Pages/Email_Pages/Landing";
import { Inbox } from "./Pages/Email_Pages/Inbox";
import { Detail } from "./Pages/Email_Pages/Detail";
import { Sent } from "./Pages/Email_Pages/Sent";

// Book-app imports
import { BookappHeader } from "./Components/Bookapp.Header";
import { Home } from "./Pages/BookApp_Pages/Home";
import { Favorites } from "./Pages/BookApp_Pages/Favorites";
import { Readed } from "./Pages/BookApp_Pages/Readed";
import { Profile } from "./Pages/BookApp_Pages/Profile";

//online foor app imports
import { OnlineFoodHeader } from "./Components/Onlinefood.Header";
import { FoodHome } from "./Pages/OnlineFood_Pages/FoodHome";
import { Menu } from "./Pages/OnlineFood_Pages/Menu";
import { CartItem } from "./Pages/OnlineFood_Pages/CartItem";

// video listing imports
import { VideoListingHeader } from "./Components/VideoListing.Header";
import { VideoHome } from "./Pages/VideoListing_Pages/VideoHome";
import { Videos } from "./Pages/VideoListing_Pages/Videos";
import { LikedVideos } from "./Pages/VideoListing_Pages/LikedVideos";
import { WatchLater } from "./Pages/VideoListing_Pages/WatchLater";
import { IndivisualVideosData } from "./Pages/VideoListing_Pages/IndivisualVideosData";
export default function App() {
  return (
    <div className="App">
      {/*Video Listing app  */}
      <BrowserRouter>
        <VideoListingHeader />
        <Routes>
          <Route path="/" element={<VideoHome />} />
          <Route path="/video" element={<Videos />} />
          <Route path="/linkedvideos" element={<LikedVideos />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route
            path="/indivisualpage/:videoId"
            element={<IndivisualVideosData />}
          />
        </Routes>
      </BrowserRouter>

      {/* OnlineFood Order App */}
      {/* <BrowserRouter>
        <OnlineFoodHeader />
        <Routes>
          <Route path="/" element={<FoodHome />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartItem />} />
        </Routes>
      </BrowserRouter> */}

      {/* Book-App Routes */}
      {/* <BrowserRouter>
        <BookappHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorites />} />
          <Route path="/read" element={<Readed />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter> */}

      {/* Email-app Routes */}
      {/* <BrowserRouter>
          <Landing />
          <hr />
          <Routes>
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/detail/:userID" element={<Detail />} />
            <Route path="/sent" element={<Sent />} />
          </Routes>
        </BrowserRouter> */}
    </div>
  );
}

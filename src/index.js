import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { EmailContextProvider } from "./Context/EmailContext";
import { BookContextProvider } from "./Context/BookContext";
import { OnlineFoodContextProvider } from "./Context/OnlineFoodContext";
import { VideoListingContextProvider } from "./Context/VideoListingContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <VideoListingContextProvider>
      <OnlineFoodContextProvider>
        <BookContextProvider>
          <EmailContextProvider>
            <App />
          </EmailContextProvider>
        </BookContextProvider>
      </OnlineFoodContextProvider>
    </VideoListingContextProvider>
  </StrictMode>
);

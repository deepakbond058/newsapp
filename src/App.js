import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(50);
  const onProgress = (progressValue) => {
    setProgress(progressValue);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" height={7} progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                onProgress={onProgress}
                apiKey={apiKey}
                key="general"
                category="general"
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                onProgress={onProgress}
                apiKey={apiKey}
                key="business"
                category="business"
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                onProgress={onProgress}
                apiKey={apiKey}
                key="entertainment"
                category="entertainment"
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                onProgress={onProgress}
                apiKey={apiKey}
                key="health"
                category="health"
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                onProgress={onProgress}
                apiKey={apiKey}
                key="science"
                category="science"
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                onProgress={onProgress}
                apiKey={apiKey}
                key="sports"
                category="sports"
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                onProgress={onProgress}
                apiKey={apiKey}
                key="technology"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

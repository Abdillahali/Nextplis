import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import loadingVideo from "../src/img/loadingVideo.mp4";

import "./App.css";
import AuthLogin from "./Component/Auth/Login/AuthLogin";
import Home from "./Component/ContentComponent/Home/Home";

// Movie
import MovieNowPlaying from "./Component/ContentComponent/Movie/NowPlaying/MovieNowPlaying";
import MoviePopular from "./Component/ContentComponent/Movie/Popular/MoviePopular";
import MovieTopRated from "./Component/ContentComponent/Movie/TopRated/MovieTopRated";
import MovieUpComing from "./Component/ContentComponent/Movie/UpComing/MovieUpComing";
import Airing from "./Component/ContentComponent/TvShow/Airing/Airing";
import OnTheAir from "./Component/ContentComponent/TvShow/OnTheAir/OnTheAir";

// TV
import TvPopular from "./Component/ContentComponent/TvShow/Popular/TvPopular";
import TopRated from "./Component/ContentComponent/TvShow/TopRated/TopRated";
import Footer from "./Component/Footer/Footer";

import Navbar from "./Component/Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <video src={loadingVideo} autoPlay muted />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="App__container">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Movie path */}
              <Route path="/popular-movie" element={<MoviePopular />} />

              <Route path="/top-rated-movie" element={<MovieTopRated />} />
              <Route path="/now-playing-movie" element={<MovieNowPlaying />} />
              <Route path="/upcoming-movie" element={<MovieUpComing />} />

              {/* TV Show Path */}
              <Route path="/popular-tvshow" element={<TvPopular />} />
              <Route path="/top-rated-tvshow" element={<TopRated />} />
              <Route path="/ontheair-tvshow" element={<OnTheAir />} />
              <Route path="/airing-tvshow" element={<Airing />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
      {/* <div className="auth-container">
        <Routes>
          <Route path="/login" element={<AuthLogin />} />
        </Routes>
      </div> */}
    </div>
  );
}

export default App;

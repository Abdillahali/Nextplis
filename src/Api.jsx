import axios from "axios";

// home and movie popular

export const home = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return movie.data.results;
};

// Top Rated Movie

export const topRated = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/top_rated?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return movie.data.results;
};

// Now Playing Movie
export const nowPlaying = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/now_playing?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return movie.data.results;
};

// UpComing

export const upComing = async () => {
  const movie = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/upcoming?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return movie.data.results;
};

// TV Popular
export const tvPopular = async () => {
  const tv = await axios.get(
    `${process.env.REACT_APP_BASEURL}/tv/popular?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return tv.data.results;
};

// TV Popular
export const tvTopRated = async () => {
  const tv = await axios.get(
    `${process.env.REACT_APP_BASEURL}/tv/top_rated?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return tv.data.results;
};
// TV On the air
export const onTheAir = async () => {
  const tv = await axios.get(
    `${process.env.REACT_APP_BASEURL}/tv/on_the_air?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return tv.data.results;
};
// TV airing
export const airingTv = async () => {
  const tv = await axios.get(
    `${process.env.REACT_APP_BASEURL}/tv/airing_today?page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return tv.data.results;
};

// Search

export const searchMovie = async (query) => {
  const search = await axios.get(
    `${process.env.REACT_APP_BASEURL}/search/movie?query=${query}&page=1&api_key=${process.env.REACT_APP_APIKEY}`
  );
  return search.data;
};

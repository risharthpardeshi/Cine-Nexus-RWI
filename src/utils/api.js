import axios from 'axios';

// const BASE_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=5e6dc926';
const BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

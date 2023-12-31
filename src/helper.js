import { store } from "./app/store";
import { setLoading } from "./features/loading/loadingSlice";

//api.themoviedb.org/3/movie/335332?language=en-US
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_MOVIEDB_APIKEY,
  },
};

export async function fetchDataFromEndPoints(url) {
  try {
    const req = await fetch(url, options);
    const data = await req.json();
    return data;
  } catch (e) {
    throw new Error(e);
  }
}

export async function search(word) {
  if (word === "") {
    return;
  }

  let data;
  try {
    store.dispatch(setLoading(true));

    const movieReq = await fetch(
      `
     https://api.themoviedb.org/3/search/movie?query=${word}&include_adult=false&language=en-US&page=1
    `,
      options
    );
    const tvReq = await fetch(
      `
     https://api.themoviedb.org/3/search/tv?query=${word}&include_adult=false&language=en-US&page=1
    `,
      options
    );
    const movieData = await movieReq.json();
    const tvData = await tvReq.json();
    data = [...movieData.results, ...tvData.results];
  } catch (e) {
    store.dispatch(setLoading(true));
    console.error(e);
  } finally {
    store.dispatch(setLoading(false));
  }

  return data;
}

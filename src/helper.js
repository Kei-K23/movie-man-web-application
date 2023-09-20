//api.themoviedb.org/3/movie/335332?language=en-US
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_MOVIEDB_APIKEY,
  },
};

export async function fetchDataFromEndPoints(url) {
  const req = await fetch(url, options);
  const data = await req.json();
  return data;
}

export async function search(word) {
  if (word === "") {
    return;
  }
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
  const data = [...movieData.results, ...tvData.results];
  return data;
}

export function replaceSpaceWithPercentSign(word) {
  let wordArray = word.split("");
  wordArray = wordArray.map((word) => {
    if (word === " ") {
      return (word = "%");
    }
    return word;
  });
  return wordArray.join("");
}

//api.themoviedb.org/3/movie/335332?language=en-US
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ2ZmJjZWFkYWNkZDE3ZDA2MDVhYzBiODViYTdiNiIsInN1YiI6IjY0YjNlNDdmMGU0ZmM4MDExZTA2YWRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvwKtb2IkseN1U_Mu2qFVudDRM1kZ4sRemXWlFp5a6c",
  },
};

export async function getDetail(type, id) {
  const req = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
    options
  );
  const data = await req.json();
  return data;
}

export async function getTrailerVideo(type, id) {
  const req = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
    options
  );
  const data = await req.json();
  return data;
}

export async function getRecommendations(type, id) {
  const req = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US`,
    options
  );
  const data = await req.json();
  return data;
}

export async function getSimilar(type, id) {
  const req = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US`,
    options
  );
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

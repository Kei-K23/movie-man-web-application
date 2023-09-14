//api.themoviedb.org/3/movie/335332?language=en-US
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ2ZmJjZWFkYWNkZDE3ZDA2MDVhYzBiODViYTdiNiIsInN1YiI6IjY0YjNlNDdmMGU0ZmM4MDExZTA2YWRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvwKtb2IkseN1U_Mu2qFVudDRM1kZ4sRemXWlFp5a6c",
  },
};

export async function getMovieDetail(id) {
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  const data = await req.json();
  return data;
}

export async function getTvDetail(id) {
  const req = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    options
  );
  const data = await req.json();
  return data;
}

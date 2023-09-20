export const END_POINTS = {
  getDetail(type, id) {
    return `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;
  },
  getTrailerVideo(type, id) {
    return `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`;
  },
  getRecommendations(type, id) {
    return `https://api.themoviedb.org/3/${type}/${id}/recommendations?language=en-US`;
  },
  getSimilar(type, id) {
    return `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US`;
  },
  getDifferentCateMovies(type, subType, page) {
    return `https://api.themoviedb.org/3/${type}/${subType}?language=en-US&page=${page}`;
  },
  getTrendingMoviesAndTvShows(type, time) {
    return `https://api.themoviedb.org/3/trending/${type}/${time}?language=en-US`;
  },
};

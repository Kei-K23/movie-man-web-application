import { useLoaderData } from "react-router-dom";
import { fetchDataFromEndPoints } from "../helper";
import SwiperCardSlides from "../components/SwiperCardSlides";
import { END_POINTS } from "../endpoints";
const Detail = () => {
  const { detail, trailerVideos, recommendations, similar, credits } =
    useLoaderData();
  const calculateRunTime = (minute) => {
    const hours = Math.floor(minute / 60);
    const remainingMinutes = minute % 60;
    return `${hours}h ${remainingMinutes}m`;
  };
  let casts = [];
  casts = credits.cast.length > 19 ? credits.cast.slice(0, 19) : credits.cast;
  console.log(casts);
  return (
    <div>
      <div className="w-full h-[full] lg:h-[500px] relative">
        <div className="layer lg:h-[500px]"></div>
        <img
          className="w-full h-[400px] lg:h-[500px]"
          src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          alt={detail.title}
        />
      </div>
      <div className="page-padding w-full flex justify-start flex-col lg:justify-between lg:items-center lg:flex-row gap-20 z-10 ">
        <div className="lg:w-2/6 xl:w-3/12">
          <img
            className="w-[70%] sm:w-[60%] md:w-[40%] mt-20 lg:mt-0 m-auto lg:w-full h-[450px]"
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
            alt={detail.title}
          />
        </div>
        <div className="shadow-2xl lg:w-1/2 px-8 py-3">
          <h2 className="text-3xl text-slate-900 font-bold">{detail.title}</h2>
          <div>
            <p className="text-xl text-slate-700">{detail.release_date}</p>
            <p>{detail.status}</p>
            <p>$ {detail.budget}</p>
            <ul className="flex items-center flex-wrap gap-4 my-4">
              {detail.genres.map((genre) => (
                <li
                  className="sm-border py-1 px-2 cursor-pointer hover:scale-95 transition-transform"
                  key={genre.id}
                >
                  {genre.name}
                </li>
              ))}
            </ul>
            <p>
              runtime: <b>{calculateRunTime(detail.runtime)}</b>
            </p>
          </div>
          <p className="my-2">
            <q className="italic">{detail.tagline}</q>
          </p>
          <h2 className="text-slate-800 font-medium text-lg">Overview</h2>
          <p className="lg:text-lg">{detail.overview}</p>
        </div>
      </div>

      <section className="page-padding my-10">
        <div className="flex items-center gap-10 mb-6">
          <h2 className="text-xl lg:text-2xl font-bold font-robotoSlab">
            Casts
          </h2>
        </div>
        <div>
          {credits.cast && credits.cast.length > 0 ? (
            <SwiperCardSlides movies={casts} />
          ) : (
            <p>No casts data to show</p>
          )}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 page-padding">
        {trailerVideos.results.map((trailer) => (
          <div key={trailer.id}>
            <iframe
              className="w-full h-[300px]"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        ))}
      </div>

      <section className="page-padding my-10">
        <div className="flex items-center gap-10 mb-6">
          <h2 className="text-xl lg:text-2xl font-bold font-robotoSlab">
            Recommendations
          </h2>
        </div>
        <div>
          {recommendations.results && recommendations.results.length > 0 ? (
            <SwiperCardSlides movies={recommendations.results} />
          ) : (
            <p>No recommendations movies yet</p>
          )}
        </div>
      </section>

      <section className="page-padding my-10">
        <div className="flex items-center gap-10 mb-6">
          <h2 className="text-xl lg:text-2xl font-bold font-robotoSlab">
            Similar Movies
          </h2>
        </div>
        <div>
          {similar.results && similar.results.length > 0 ? (
            <SwiperCardSlides movies={similar.results} />
          ) : (
            <p>No similar movies yet</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Detail;

export async function movieDetailLoader({ params }) {
  const detail = await fetchDataFromEndPoints(
    END_POINTS.getDetail("movie", params.id)
  );
  const trailerVideos = await fetchDataFromEndPoints(
    END_POINTS.getTrailerVideo("movie", params.id)
  );
  const recommendations = await fetchDataFromEndPoints(
    END_POINTS.getRecommendations("movie", params.id)
  );
  const similar = await fetchDataFromEndPoints(
    END_POINTS.getSimilar("movie", params.id)
  );
  const credits = await fetchDataFromEndPoints(
    END_POINTS.getCredits("movie", params.id)
  );
  return { detail, trailerVideos, recommendations, similar, credits };
}

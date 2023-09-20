import { useLoaderData } from "react-router-dom";
import { fetchDataFromEndPoints } from "../helper";
import SwiperCardSlides from "../components/SwiperCardSlides";
import { END_POINTS } from "../endpoints";

const TvDetail = () => {
  const { detail, trailerVideos, recommendations } = useLoaderData();

  const calculateRunTime = (minute) => {
    const hours = Math.floor(minute / 60);
    const remainingMinutes = minute % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <div>
      <div className="w-full h-[full] lg:h-[500px] relative">
        <div className="layer lg:h-[500px]"></div>
        <img
          className="w-full h-[400px] lg:h-[500px]"
          src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          alt={detail.name}
        />
      </div>
      <div className="page-padding w-full flex justify-start flex-col lg:justify-between lg:items-center lg:flex-row gap-20 z-10 ">
        <div className="lg:w-2/6 xl:w-3/12">
          <img
            className="w-[70%] sm:w-[60%] md:w-[40%] mt-20 lg:mt-0 m-auto lg:w-full h-[450px]"
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
            alt={detail.name}
          />
        </div>
        <div className="shadow-2xl lg:w-1/2 px-8 py-3">
          <h2 className="text-3xl text-slate-900 font-bold">{detail.name}</h2>
          <div>
            <p className="text-xl text-slate-700">{detail.first_air_date}</p>
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
              runtime:{" "}
              <b>
                {Number.isInteger(calculateRunTime(detail.runtime))
                  ? calculateRunTime(detail.runtime)
                  : "00:00"}
              </b>
            </p>
          </div>
          <p className="my-2">
            <q className="italic">
              {detail.tagline === "" ? "no tag line" : detail.tagline}
            </q>
          </p>
          <h2 className="text-slate-800 font-medium text-lg">Overview</h2>
          <p className="lg:text-lg">{detail.overview}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 page-padding">
        {trailerVideos.results && trailerVideos.results.length > 0 ? (
          trailerVideos.results.map((trailer) => (
            <div key={trailer.id}>
              <iframe
                className="w-full h-[300px]"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          ))
        ) : (
          <p>No trailer video for {detail.name}</p>
        )}
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
    </div>
  );
};

export default TvDetail;

export async function tvDetailLoader({ params }) {
  const detail = await fetchDataFromEndPoints(
    END_POINTS.getDetail("tv", params.id)
  );
  const trailerVideos = await fetchDataFromEndPoints(
    END_POINTS.getTrailerVideo("tv", params.id)
  );
  const recommendations = await fetchDataFromEndPoints(
    END_POINTS.getRecommendations("tv", params.id)
  );

  return { detail, trailerVideos, recommendations };
}

import { useLoaderData } from "react-router-dom";
import { getDetail, getTrailerVideo } from "../helper";
const Detail = () => {
  const { detail, trailerVideos } = useLoaderData();
  const calculateRunTime = (minute) => {
    const hours = Math.floor(minute / 60);
    const remainingMinutes = minute % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const handleClick = () => {
    console.log("click");
  };

  console.log(detail, trailerVideos);

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
            <ul className="flex items-center gap-4 my-4">
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
      <button
        onClick={handleClick}
        className="group sm-border m-auto block my-8 px-4 py-2 text-xl font-medium cursor-pointer hover:scale-95 transition-transform"
      >
        <i className="fa-solid fa-circle-play group-hover:text-blue-500 transition-colors"></i>{" "}
        watch trailer
      </button>
    </div>
  );
};

export default Detail;

export async function movieDetailLoader({ params }) {
  const detail = await getDetail("movie", params.id);
  const trailerVideos = await getTrailerVideo("movie", params.id);
  return { detail, trailerVideos };
}

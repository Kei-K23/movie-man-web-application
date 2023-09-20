import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 page-padding text-slate-200">
      <div>
        <Link to="/" className="group ">
          <i className="transition-colors fa-solid fa-tv text-2xl lg:text-3xl text-blue-600 group-hover:text-blue-700"></i>{" "}
          <span className="font-robotoSlab transition-colors text-xl lg:text-2xl font-bold text-blue-600 group-hover:text-slate-700">
            Movie-Man
          </span>
        </Link>
        <p className="lg:text-lg">Your favorite movies hub</p>
      </div>

      <div>
        <h3>Movies</h3>
        <ul className=" shadow-lg min-w-[150px]">
          <li className="py-1  hover:underline hover:text-slate-400 transition-all ">
            <Link
              to={"/movie/popular"}
              className="text-md lg:text-lg font-bold"
            >
              Popular movies
            </Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link
              to={"/movie/now_playing"}
              className="text-md lg:text-lg font-bold"
            >
              Now playing
            </Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link
              to={"/movie/upcoming"}
              className="text-md lg:text-lg font-bold"
            >
              Upcoming
            </Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link
              to={"/movie/top_rated"}
              className="text-md lg:text-lg font-bold"
            >
              Top rated
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <h3>TV shows</h3>
        <ul className="  shadow-lg min-w-[150px]">
          <li className="py-1  hover:underline hover:text-slate-400 transition-all ">
            <Link to={"/tv/popular"} className="text-md lg:text-lg font-bold">
              Popular TvShows
            </Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link to={"/tv/air_today"} className="text-md lg:text-lg font-bold">
              Air today
            </Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link to={"/tv/on_air"} className="text-md lg:text-lg font-bold">
              On air
            </Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link to={"/tv/top_rated"} className="text-md lg:text-lg font-bold">
              Top rated
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

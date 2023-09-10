import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black grid grid-cols-3 page-padding text-slate-200">
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
            <Link className="text-lg font-bold">Movies</Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link className="text-lg font-bold">Movies</Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link className="text-lg font-bold">Movies</Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link className="text-lg font-bold">Movies</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3>TV shows</h3>
        <ul className="  shadow-lg min-w-[150px]">
          <li className="py-1  hover:underline hover:text-slate-400 transition-all ">
            <Link className="text-lg font-bold">Movies</Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link className="text-lg font-bold">Movies</Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link className="text-lg font-bold">Movies</Link>
          </li>
          <li className="py-1  hover:underline hover:text-slate-400 transition-all">
            <Link className="text-lg font-bold">Movies</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

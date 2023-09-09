import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-100 w-full page-padding absolute z-10">
      <nav>
        <div className="flex items-center gap-4 lg:gap-10">
          <Link to="/" className="group ">
            <i className="transition-colors fa-solid fa-tv text-2xl lg:text-3xl text-blue-600 group-hover:text-blue-700"></i>{" "}
            <span className="font-robotoSlab transition-colors text-xl lg:text-2xl font-bold text-blue-600 group-hover:text-slate-700">
              Movie-Man
            </span>
          </Link>
          <ul className="flex items-center gap-4 md:gap-8 lg:gap-12">
            <li className="group relative ">
              <p className="text-lg font-bold cursor-pointer">Movies</p>
              <ul className="hidden  group-hover:block absolute bg-slate-100 shadow-lg min-w-[150px]">
                <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300 ">
                  <Link className="text-lg font-bold">Movies</Link>
                </li>
                <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                  <Link className="text-lg font-bold">Movies</Link>
                </li>
                <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                  <Link className="text-lg font-bold">Movies</Link>
                </li>
                <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                  <Link className="text-lg font-bold">Movies</Link>
                </li>
              </ul>
            </li>
            <li className="group relative  transition-colors">
              <p className="text-lg font-bold cursor-pointer">TV Shows</p>
              <ul className="hidden  group-hover:block absolute bg-slate-100 shadow-lg min-w-[150px]">
                <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                  <Link className="text-lg font-bold">Movies</Link>
                </li>
                <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                  <Link className="text-lg font-bold">Movies</Link>
                </li>
                <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                  <Link className="text-lg font-bold">Movies</Link>
                </li>
                <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                  <Link className="text-lg font-bold">Movies</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

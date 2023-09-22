import { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const openRef = useRef();
  const closeRef = useRef();
  const handleClick = () => {
    if (show) {
      setShow(false);
      openRef.current.style.display = "block";
    } else {
      setShow(true);
      openRef.current.style.display = "none";
    }
  };

  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
    if (windowWidth > 768) {
      setShow(false);
      openRef.current.style.display = "none";
      closeRef.current.style.display = "none";
    } else {
      openRef.current.style.display = "block";
      closeRef.current.style.display = "block";
    }
  }

  // Add an event listener for the window's resize event
  window.addEventListener("resize", handleWindowResize);

  return (
    <>
      <header className="bg-slate-100 w-full page-padding sticky top-0  z-30">
        <nav>
          <div className="flex items-center gap-4 lg:gap-10">
            <Link to="/" className="group ">
              <i className="transition-colors fa-solid fa-tv text-2xl lg:text-3xl text-blue-600 group-hover:text-blue-700"></i>{" "}
              <span className="font-robotoSlab transition-colors text-xl lg:text-2xl font-bold text-blue-600 group-hover:text-slate-700">
                Movie-Man
              </span>
            </Link>
            <i
              title="open"
              onClick={handleClick}
              ref={openRef}
              className="ml-4 text-2xl fa-solid fa-bars cursor-pointer block md:hidden"
            ></i>
            <ul
              className={`fixed md:relative md:right-0 ${
                show && windowWidth < 768
                  ? "right-0 top-0 h-screen bg-slate-100"
                  : "-right-[50%]"
              } md:flex items-center gap-4 md:gap-8 lg:gap-12 z-50 transition-all`}
            >
              <li
                className="absolute top-2 left-4 hover:text-red-400 cursor-pointer"
                title="close"
                onClick={handleClick}
                ref={closeRef}
              >
                <i className="text-2xl fa-solid fa-xmark"></i>
              </li>

              <li
                className={`${
                  show && windowWidth < 768 ? "mt-8 p-4" : "group relative"
                } `}
              >
                <p className="text-lg font-bold md:cursor-pointer">Movies</p>
                <ul
                  className={`${
                    show && windowWidth < 768 ? "block mt-2" : "hidden"
                  } group-hover:block md:absolute bg-slate-100 md:shadow-lg min-w-[200px]`}
                >
                  <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300 ">
                    <Link to="/movie/popular" className="text-lg font-bold">
                      Popular Movies
                    </Link>
                  </li>
                  <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                    <Link to="/movie/now_playing" className="text-lg font-bold">
                      Now Playing
                    </Link>
                  </li>
                  <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                    <Link to="/movie/upcoming" className="text-lg font-bold">
                      Upcoming
                    </Link>
                  </li>
                  <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                    <Link to="/movie/top_rated" className="text-lg font-bold">
                      Top Rated
                    </Link>
                  </li>
                </ul>
              </li>
              <li
                className={`${
                  show && windowWidth < 768 ? " p-4" : "group relative"
                } `}
              >
                <p className="text-lg font-bold cursor-pointer">TV Shows</p>
                <ul
                  className={`${
                    show && windowWidth < 768 ? "block " : "hidden"
                  } group-hover:block md:absolute bg-slate-100 md:shadow-lg min-w-[200px]`}
                >
                  <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                    <Link to="/tv/popular" className="text-lg font-bold">
                      Popular TvShows
                    </Link>
                  </li>
                  <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                    <Link to="/tv/air_today" className="text-lg font-bold">
                      Air Today
                    </Link>
                  </li>
                  <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                    <Link to="/tv/on_air" className="text-lg font-bold">
                      On Air
                    </Link>
                  </li>
                  <li className="py-1 px-4 hover:text-slate-700 transition-colors hover:bg-slate-300">
                    <Link to="/tv/top_rated" className="text-lg font-bold">
                      Top Rated
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {show && (
        <div
          onClick={() => {
            setShow(false);
            openRef.current.style.display = "block";
          }}
          className="bg-layer transition-all"
        ></div>
      )}
    </>
  );
};

export default Navbar;

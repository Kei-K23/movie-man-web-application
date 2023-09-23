import { useState } from "react";
import { search } from "../helper";
import { Link } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = async (e) => {
    const w = e.target.value;
    setKeyword("");
    setResults([]);
    if (w === "") {
      setKeyword("");
      setResults([]);
      return;
    }
    setKeyword(w);
    const searchKeyWord = encodeURIComponent(w);
    const data = await search(searchKeyWord);
    setResults((prev) => {
      return [...prev, ...data];
    });
  };

  return (
    <div>
      <form className=" sm-border lg:h-12 flex justify-between items-center bg-slate-100 ">
        <i className=" fa-solid fa-magnifying-glass ml-3"></i>
        <input
          value={keyword}
          onChange={handleChange}
          type="text"
          placeholder="Search movies, tv shows..."
          aria-label="search movies, tv shows"
          className="w-full lg:text-xl p-2 lg:p-4 bg-transparent outline-none peer"
          required
        />
      </form>
      <ul className=" w-full max-h-[350px] overflow-auto bg-slate-100 sm-border">
        {results.map((result) => (
          <Link
            to={
              result.media_type === "tv"
                ? `/tv_id/${result.id}`
                : `/movie_id/${result.id}`
            }
            key={result.id}
          >
            <li
              className="group transition-all my-4 py-2 px-8 bg-slate-200 dark:bg-slate-700 dark:text-slate-200 hover:bg-sky-500 dark:hover:bg-sky-500  first:mt-0 last:mb-0 flex items-center gap-8 cursor-pointer"
              key={result.id}
              title="click to view detail"
            >
              <div className="overflow-hidden">
                <img
                  className="transition-all w-[90px] h-[90px] group-hover:scale-110"
                  src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  alt={result.name ?? result.title}
                />
              </div>
              <div className="flex-1">
                <h3 className="group-hover:text-slate-200 font-bold text-sm lg:text-lg">
                  {result.name ?? result.title}
                </h3>
                <h3 className="text-slate-700 dark:text-slate-300">
                  {result.release_date ?? result.first_air_date}
                </h3>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Search;

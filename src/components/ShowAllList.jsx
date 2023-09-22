import { Link } from "react-router-dom";
import Card from "./Card";

const ShowAllList = ({ results, text, handleClick }) => {
  return (
    <div className="mt-8">
      {results && results ? (
        <div>
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-5">
            {results.map((result) => (
              <Link
                to={
                  result?.title
                    ? `/movie_id/${result.id}`
                    : `/tv_id/${result.id}`
                }
                key={result.id}
              >
                <Card
                  poster_path={result.poster_path}
                  title={result.title ?? result.name}
                  release_date={result.release_date ?? result.first_air_date}
                />
              </Link>
            ))}
          </div>
          <button
            onClick={handleClick}
            className="transition-all px-4 py-2 sm-border font-bold m-auto block mt-8 hover:rounded-md active:scale-95"
          >
            Load More
          </button>
        </div>
      ) : (
        <p>{text}</p>
      )}
    </div>
  );
};

export default ShowAllList;

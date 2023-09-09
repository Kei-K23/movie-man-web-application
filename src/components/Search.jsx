const Search = () => {
  return (
    <form className="sm-border lg:h-12 flex justify-between items-center bg-slate-100">
      <input
        type="text"
        placeholder="Search movies, tv shows..."
        aria-label="search movies, tv shows"
        className="lg:text-xl p-2 lg:p-4 bg-transparent outline-none peer"
        required
      />
      <button
        className="lg:text-xl peer-focus:ring-2 peer-focus:ring-sky-600  p-2 w-1/4 h-full bg-blue-400 rounded-l-2xl transition-all hover:w-1/3 hover:bg-blue-500 hover:text-slate-300 active:bg-blue-600"
        type="submit"
      >
        <i className="fa-solid fa-magnifying-glass"></i> search
      </button>
    </form>
  );
};

export default Search;

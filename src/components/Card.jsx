import "react-circular-progressbar/dist/styles.css";
const Card = ({ title, release_date, poster_path }) => {
  return (
    <div
      title={title}
      className="h-[450px] cursor-pointer sm-border shadow-lg group "
    >
      <div className="overflow-hidden ">
        <img
          className="w-full h-[270px] transition-all rounded-b-xl group-hover:scale-110"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
      </div>
      <h3 className="font-bold py-2 px-3 ">{title}</h3>
      <h3 className="text-slate-600 font-bold px-3">{release_date}</h3>
    </div>
  );
};

export default Card;

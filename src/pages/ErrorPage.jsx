import { Link, useRouteError } from "react-router-dom";
import Lottie from "react-lottie-player";
import errorPage from "../animations/error_animation.json";
const ErrorPage = () => {
  const error = useRouteError();
  const { data, status, statusText } = error;
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <>
      <h1 className="mt-6 text-center text-4xl lg:text-6xl text-slate-600 font-bold">
        Oops!
      </h1>
      <Lottie
        className="w-full h-[200px]"
        animationData={errorPage}
        play
        loop
      />
      <div className="text-lg lg:text-xl mt-10 flex justify-start items-center flex-col gap-2">
        <h2>There was something wrong!</h2>
        <h3>{data ?? "Sorry! No Error message to provide"}</h3>
        <h3>Status: {status}</h3>
        <h3>Status message: {statusText}</h3>
      </div>

      <p className="text-center font-bold mt-2">
        ! Please refresh to page or go back to home page
      </p>

      <div className="flex justify-center items-center flex-col mt-4 gap-3">
        <button
          onClick={handleClick}
          className="w-[200px] p-1 sm-border transition-all hover:scale-95"
        >
          Refresh The Page
        </button>
        <Link to="/">
          <button className="w-[200px] p-1 sm-border transition-all hover:scale-95">
            Go Back To Home Page
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="font-montserrat">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;

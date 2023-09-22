import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";

const Main = () => {
  return (
    <div className="font-montserrat ">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Main;

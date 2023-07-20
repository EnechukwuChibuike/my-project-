import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <Header />
      <div
        style={{
          height: "90vh",
          backgroundColor: "rgb(0, 208, 255)",
          color: "white",
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Main;

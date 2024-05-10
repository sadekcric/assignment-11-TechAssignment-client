import { Outlet } from "react-router-dom";
import Header from "../CommonRoute/Header/Header";
import Footer from "../CommonRoute/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-337px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

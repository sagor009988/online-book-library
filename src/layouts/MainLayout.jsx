import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav";

const MainLayout = () => {
  return (
    <div>
      <div className="h-[64px]">
        <Nav></Nav>
      </div>
      {/* outlet */}
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

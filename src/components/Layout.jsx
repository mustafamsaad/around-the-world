import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";

const Layout = () => {
  return (
    <div className="font-inter min-h-screen w-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="container mx-auto px-5 md:px-8">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;

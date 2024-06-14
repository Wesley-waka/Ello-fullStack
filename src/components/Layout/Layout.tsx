import React, { ReactNode } from "react";
// import Footer from "./Footer";
import Navbar from './Navbar';
import SideBar from './SideBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideBar/>
      <div>{children}</div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;

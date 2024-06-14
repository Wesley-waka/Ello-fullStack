import React, { ReactNode } from "react";
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
    </>
  );
};

export default Layout;

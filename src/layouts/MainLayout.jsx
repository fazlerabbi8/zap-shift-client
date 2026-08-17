import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="container mx-auto p-6">
      <Outlet />
    </div>
  );
};

export default MainLayout;
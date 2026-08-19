import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";

import authImg from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="container mx-auto p-6 space-y-5">
      <div className="flex justify-between items-center">
        <Logo></Logo>
      </div>
      <div className="flex items-center justify-center w-5xl mx-auto">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>

        <div className="flex-1">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

import Logo from "../Components/Logo/Logo";
import { Outlet } from "react-router";

import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="flex max-w-7xl">
        <Logo />
      </header>

      {/* Main Content */}
      <main className="mx-auto flex min-h-[calc(100vh-100px)] max-w-5xl items-center justify-center">
        <div className="flex w-full flex-col-reverse items-center gap-8 lg:flex-row lg:gap-12">
          
          {/* Auth Form */}
          <div className="w-full flex-1">
            <Outlet />
          </div>

          {/* Image */}
          <div className="flex w-full flex-1 justify-center">
            <img
              src={authImg}
              alt="Authentication"
              className="w-full max-w-md object-contain"
            />
          </div>

        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = instance.interceptors.request.use(
      async (config) => {
        if (user?.accessToken) {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const resInterceptor = instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const statusCode = error.response?.status;

        console.log("Axios error status:", statusCode);

        if (statusCode === 401 || statusCode === 403) {
          try {
            await logout();
            navigate("/login");
          } catch (logoutError) {
            console.error("Logout error:", logoutError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      instance.interceptors.request.eject(reqInterceptor);
      instance.interceptors.response.eject(resInterceptor);
    };
  }, [user, logout, navigate]);

  return instance;
};

export default useAxiosSecure;
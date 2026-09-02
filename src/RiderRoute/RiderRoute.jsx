import Forbidden from "../Components/Forbidden/Forbidden";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const RiderRoute = ({children}) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || !user || roleLoading) {
    return <span className="loading loading-spinner text-neutral"></span>;
  }

  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default RiderRoute;

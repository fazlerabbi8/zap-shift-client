import Forbidden from "../Components/Forbidden/Forbidden";
import useAuth from "../Hooks/useAuth";
import useRole from "../Hooks/useRole";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const {role, roleLoading} =useRole();

    if(loading || roleLoading){
        return <span className="loading loading-spinner text-neutral"></span>;
    }

    if(role !== 'admin'){
        return <Forbidden></Forbidden>;
    }

    return children;
};

export default AdminRoute;
import { AuthContext } from "../Contexts/AuthContext";


const AuthProvider = ({children}) => {
    const AuthInfo = {

    }
    return (
        <AuthContext value={AuthInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;
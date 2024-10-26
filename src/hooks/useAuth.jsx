import { useContext } from "react";
import { AuthContext } from "../Authentications/Providers/Providers";



const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;
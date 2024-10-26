
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/Providers";



const PrivateRoute = ({children}) => {

    //  import user & loading by context:
    const {loading,user} = useContext(AuthContext);


    if(loading){

        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){

        return children;
    }

    return <Navigate to='/login'></Navigate>


   
};

export default PrivateRoute;
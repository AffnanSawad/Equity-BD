import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";
import { Navigate } from "react-router-dom";




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
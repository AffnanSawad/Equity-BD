import { useContext } from "react";
import { AuthContext } from "../Providers/Providers";
import { Navigate, useLocation } from "react-router-dom";




const PrivateRoute = ({children}) => {

    //  import user & loading by context:
    const {loading,user} = useContext(AuthContext);
    
    // login korar por jate sathe sathe private route component e cle jai.
    const location = useLocation();

   


    if(loading){

        return <span className="loading loading-bars loading-lg"></span>
    }

    if(user?.email){

        return children;
    }
  
    // login korar por jate sathe sathe private route component e cle jai.
    return <Navigate state={location.pathname} to='/login' replace></Navigate>


   
};

export default PrivateRoute;
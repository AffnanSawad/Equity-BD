import { useContext } from "react";
import { AuthContext } from "../../Authentications/Providers/Providers";


const UserHome = () => {
   
    const {user} = useContext(AuthContext);


    return (
        <div className="max-w-7xl mx-auto">
          
          <div className="md:flex justify-between lg:flex justify-between">
          
          <h1 className="text-2xl font-bold text-red-700"> Hi , Welcome Sir! </h1> 

          <button className="btn btn-outline btn-accent text-white mt-5 md:mt-0 lg:mt-0">  {user.email} </button>


          </div>

          
          

        
        
        <div className="lg:mx-10 my-20">

        <ul className="steps steps-vertical lg:steps-horizontal">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose Your Cart</li>
  <li className="step step-primary"> Pay Your Bill </li>
  <li className="step step-primary">Receive Product</li>
    </ul>

        </div>
        
        </div>
    );
};

export default UserHome;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Authentications/Providers/Providers";
import auth from "../../../firebase/firebse.config";
import Swal from "sweetalert2";
import { CgProfile } from "react-icons/cg";


const Navbar = () => {

  // import
  const {user,logOut} = useContext(AuthContext);


  // handle logOut
  const handleLogOut = ()=> {

    logOut(auth)
    .then(() => {

        console.log("log out successfully");
        
        // swal
        Swal.fire({
          title: "  Logged Out!",
          text: "You Are Successfully Logged Out!",
          icon: "success"
        });
    })

    .catch(error=>{
        console.log(error.message)
    })

    // navigate('/')
    
}
   
    // navLinks

    const navLinks = <>
    
    <li className="font-bold"> <Link to='/'> Home </Link>  </li>


    <li className="font-bold"> <Link to='/apartment'> Apartment </Link>  </li>


    <li className="font-bold"> <Link to='/contact'> Contact </Link>  </li>


    <li className="font-bold"> <Link to='/about'> About Us </Link>  </li>
    
    
    
    </>



    return (
        <div className="navbar bg-slate-300 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {navLinks}
            </ul>
          </div>
          
          <div className="flex">

          <img className="h-14 w-15"
           src="https://i.ibb.co.com/8r9wmff/equity-bank-logo.png" alt="" />
         
          <a className="btn btn-ghost text-2xl font-bold">  Equity-BD    </a> 
          
    


          </div>


        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        {/* login / logout button */}
        {
        user ? 
   <>
   
   <div className="navbar-end mr-20">
   <div className=" dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/cxh3cQp/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 mb-44 w-52 p-2 shadow text-xl font-bold">

          
       <Link>
       <button className="btn btn-outline my-4 w-full">
       <div className="flex mr-3 py-3">
         <CgProfile className="mt-1 ml-3" /><li className="ml-2 mt-1"> Dashboard</li>
         </div>
       </button>
       
       </Link>
        
        <button className="btn btn-outline btn-error" onClick={handleLogOut}>
        Log Out
        </button>
       
      </ul>
    </div>
   </div>

   
   
   </>

      :
    

<div className="navbar-end">
<Link to='/login'> <a className="btn btn-primary text-white">Log In</a>  </Link>
</div>


       }



   



      </div>
    );
};

export default Navbar;
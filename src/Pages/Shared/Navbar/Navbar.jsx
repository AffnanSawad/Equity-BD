import { Link } from "react-router-dom";


const Navbar = () => {
   
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
        <div className="navbar-end">
          <a className="btn btn-accent">LogIn</a>
        </div>
      </div>
    );
};

export default Navbar;
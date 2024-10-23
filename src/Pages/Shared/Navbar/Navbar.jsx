import { useContext, useEffect, useState } from "react";
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


  //  light- dark theme method
  const [theme ,settheme] = useState('light')

  //  light- dark theme method
  useEffect(  ()=>{

 localStorage.setItem('theme',theme)

 const localtheme = localStorage.getItem('theme')

 document.querySelector('html').setAttribute('data-theme',localtheme)


  }   ,
 
  [theme]
 
 
 )

  //  light- dark theme method
  const handletoggle = (e) => {

   console.log(e.target.checked)
  
 if(e.target.checked){
   
   settheme('retro')


 }
 else{
   settheme('light')
 }


  }

  //  //  ENDS HERE: light- dark theme method

  
   
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



       {/* theme light/dark */}

      {/* light-dark theme button */}


<button className=" btn btn-ghost btn-circle ml-24">
      
    


      <label className="cursor-pointer grid place-items-center mr-2 lg:mr-10">
    <input
    
    onChange={handletoggle}
    
    
    type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
  </label>
     
      
      </button>

     

     {/* ends here dark/light theme */}






       
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
import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Apartment from "../Pages/Apartment/Apartment";
import LogIn from "../Authentications/LogIn/LogIn";
import Signup from "../Authentications/Signup/Signup";
import PrivateRoute from "../Authentications/PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import UserHome from "../Pages/Dashboard/UserHome";
import Review from "../Pages/Dashboard/Review";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory/PaymentHistory";

//   export korte hbe
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,


    //   
    children: [
     
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/apartment',
          element: <PrivateRoute><Apartment></Apartment></PrivateRoute>
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path:'/signup',
          element: <Signup></Signup>
        }



    ]
    },

  // dashboard
  {
    path:'dashboard',
    element: <Dashboard></Dashboard>,

    children: [
    
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'userHome',
        element:<UserHome></UserHome>
      },
      {
        path:'review',
        element: <Review></Review>
      },
      {
        path:'payment',
        element: <Payment></Payment>
      },
      // {
      //   path: 'paymentHistory',
      //   element: <PaymentHistory></PaymentHistory>
      // },
     


    ]
  }



  ]);
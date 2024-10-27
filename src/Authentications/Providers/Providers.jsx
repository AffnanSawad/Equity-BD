import { createUserWithEmailAndPassword, linkWithCredential, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebse.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";



export const AuthContext = createContext(null);

// google
const googleprovider = new GoogleAuthProvider();



const Providers = ({children}) => {

    // states of user & loader
    const [user,setuser] = useState(null);
    const [loading, setloading]=useState(null);

    // new user
    const createUser =(email,password)=> {

        setloading(true);

      return  createUserWithEmailAndPassword(auth,email,password)
    }

    // exists user
    const existingUser = (email,password)=>{

        setloading(true);

       return signInWithEmailAndPassword(auth,email,password);
    }

    // google
    const googleLogIn = ()=>{

        setloading(true);

        return signInWithPopup(auth, googleprovider)
    }

    
        // logout
        const logOut = ()=> {
          
            setloading(true)
            return signOut(auth);
        }


         //observer (onAuth)
         useEffect( ()=> {
  
            const unsubscribe=  onAuthStateChanged(auth, (currentuser) => {
                
              //  jwt
              const userEmail = currentuser?.email || user?.email;
              const loggedUser= {email:userEmail};


                if (currentuser) {

                  axios.post('https://equity-bd-server.vercel.app/jwt',loggedUser,{withCredentials:true})

                  .then(res=> {console.log(res.data)})
                 
                 setuser(currentuser);

               } 

               else {

                  

                  axios.post('https://equity-bd-server.vercel.app/logout',loggedUser,{withCredentials:true})

                  .then(res=> {
                    
                    console.log('log-out',res.data)
                  
                  })

                  setuser(null)
                
                }
               
                setloading(false)

              });
      
              return ()=> {
                unsubscribe();
              }
        
             },[])


   




  
    const aunthInfo = {user,loading,createUser,existingUser,googleLogIn,logOut}


    return (
        <AuthContext.Provider value={aunthInfo}>
           {children} 
        </AuthContext.Provider>
    );
};

export default Providers;
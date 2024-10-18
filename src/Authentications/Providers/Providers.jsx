import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebse.config";
import { GoogleAuthProvider } from "firebase/auth";



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
                if (currentuser) {
                 
                 setuser(currentuser)
                } 
                else {
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
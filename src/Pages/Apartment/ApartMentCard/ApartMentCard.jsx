import { useContext } from "react";
import { IoLocation } from "react-icons/io5";
import { AuthContext } from "../../../Authentications/Providers/Providers";
import Swal from "sweetalert2";
import axios from "axios";
import useCart from "../../../hooks/useCart";


const ApartMentCard = ({item}) => {

    
    const {name,price,size,type,image,location,_id} = item;
    
    const {user} = useContext(AuthContext);
   
    // Refetch is Used to count adding cart item number in Dashboard
    const [ , refetch] = useCart();

    // handle to card
    const handleAddCart = food =>{

      console.log(food, user.email);

      const cartItem = {

        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      
      axios.post('https://equity-bd-server.vercel.app/carts',cartItem)
      .then(res=>{ 
        
        console.log(res.data)

      if(res.data.insertedId){
         // alert
      Swal.fire({
        title: 'Added!',
        text: `${name} Added To Your Cart`,
        icon: 'success',
        confirmButtonText: 'Cool'
      })
         

      // Refetch is Used to count adding cart item number in Dashboard
      refetch();

      }

      })

     

    }

    return (
        <div className="card bg-base-100 w-96 shadow-2xl my-10">
        <figure>
          <img

          className="h-[300px]"
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{name} </h2>
          <div className="flex my-5">
          <p className="font-semibold text-xl"> Price:  $  {price}K </p>
          <p className="font-semibold text-xl"> Size: {size} </p>
          </div>
          
          <div className="flex ">
          <IoLocation /> 
          <p className="font-bold text-xl ml-2 "> {location} </p>
          </div>


          <div className="card-actions ">
    <button 
    
    // add to cart
   onClick={()=>handleAddCart(item)}
    
    
    className="btn btn-outline bg-state-500 border-0 border-b-4 border-orange-400 mt-4">Add To Cart</button>
            
          </div>
        </div>
      </div>
    );
};

export default ApartMentCard;
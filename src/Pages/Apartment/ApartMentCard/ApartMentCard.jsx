import { IoLocation } from "react-icons/io5";


const ApartMentCard = ({item}) => {

    
    const {name,price,size,type,image,location,_id} = item;


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
          <p className="font-semibold text-xl"> Price: ${price} </p>
          <p className="font-semibold text-xl"> Size: {size} </p>
          </div>
          
          <div className="flex ">
          <IoLocation /> 
          <p className="font-bold text-xl ml-2 "> {location} </p>
          </div>


          <div className="card-actions ">
    <button 
    
    // add to cart
    // onClick={()=> handleAddToCart(item) }
    
    
    className="btn btn-outline bg-state-500 border-0 border-b-4 border-orange-400 mt-4">Add To Cart</button>
            
          </div>
        </div>
      </div>
    );
};

export default ApartMentCard;